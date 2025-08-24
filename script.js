const el = (id) => document.getElementById(id);
const notesEl = el('notes');
const emptyState = el('emptyState');

const store = {
  key: 'mini-notes-v1',
  get() { return JSON.parse(localStorage.getItem(this.key) || '[]'); },
  set(v) { localStorage.setItem(this.key, JSON.stringify(v)); }
};

function render(list){
  notesEl.innerHTML = '';
  if(!list.length){
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';
  for(const n of list){
    const li = document.createElement('li');
    li.className = 'note';
    li.innerHTML = `
      <h3>${escapeHTML(n.title)}</h3>
      <p>${escapeHTML(n.content)}</p>
      <div class="meta">${new Date(n.created).toLocaleString()}</div>
      <div class="actions">
        <button class="copy">Copy</button>
        <button class="delete">Delete</button>
      </div>
    `;
    li.querySelector('.delete').onclick = () => removeNote(n.id);
    li.querySelector('.copy').onclick = async () => {
      try{ await navigator.clipboard.writeText(n.content); alert('Copied!'); }
      catch{ alert('Copy failed'); }
    };
    notesEl.appendChild(li);
  }
}

function escapeHTML(s){
  return s.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function addNote(title, content){
  const list = store.get();
  list.unshift({ id: crypto.randomUUID(), title, content, created: Date.now() });
  store.set(list);
  render(list);
}

function removeNote(id){
  const list = store.get().filter(n => n.id !== id);
  store.set(list);
  render(list);
}

el('noteForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  const title = el('title').value.trim();
  const content = el('content').value.trim();
  if(!title || !content) return;
  addNote(title, content);
  e.target.reset();
  el('title').focus();
});

el('search').addEventListener('input', (e)=>{
  const q = e.target.value.toLowerCase();
  const list = store.get().filter(n =>
    n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q)
  );
  render(list);
});

el('clearAll').addEventListener('click', ()=>{
  if(confirm('Delete all notes?')){ store.set([]); render([]); }
});

// Theme toggle
const themeBtn = el('toggleTheme');
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.toggle('light', savedTheme === 'light');
themeBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

// Seed demo note if empty
if(store.get().length === 0){
  store.set([
    { id: crypto.randomUUID(), title:'Welcome 👋', content:'Add your first note using the form above!', created: Date.now() }
  ]);
}
render(store.get());