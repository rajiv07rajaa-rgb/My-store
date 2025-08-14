:root{
  --bg:#0f172a; --fg:#e2e8f0; --card:#111827; --muted:#94a3b8; --accent:#22c55e; --danger:#ef4444;
}
*{box-sizing:border-box}
body{
  margin:0; font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;
  background:var(--bg); color:var(--fg);
}
.topbar{
  position:sticky; top:0; display:flex; align-items:center; justify-content:space-between;
  padding:12px 16px; background:#020617; border-bottom:1px solid #1f2937;
}
.container{ max-width:900px; margin:16px auto; padding:0 16px; }
form#noteForm{
  display:grid; gap:8px; background:var(--card); padding:12px; border-radius:16px; border:1px solid #1f2937;
}
input, textarea, button{
  width:100%; padding:10px 12px; border-radius:12px; border:1px solid #334155; background:#0b1220; color:var(--fg);
}
button{ cursor:pointer; font-weight:600; border-color:#1f2937; background:var(--accent); color:#052e12; }
button:hover{ filter:brightness(1.05) }
button.danger{ background:var(--danger); color:#3b0b0b }
.toolbar{
  margin:12px 0; display:flex; gap:8px; align-items:center;
}
.grid{
  list-style:none; padding:0; display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:12px;
}
.note{
  background:var(--card); border:1px solid #1f2937; border-radius:16px; padding:12px; display:flex; flex-direction:column; gap:8px;
}
.note h3{ margin:0; font-size:1.05rem }
.note p{ margin:0; color:var(--fg) }
.meta{ font-size:.8rem; color:var(--muted) }
.actions{ display:flex; gap:8px; }
.actions button{ flex:1; background:#0b1220; color:var(--fg); }
.actions button.delete{ background:var(--danger); color:#fff }
.muted{ color:var(--muted); text-align:center; margin:24px 0 }
.footer{ text-align:center; padding:16px; color:var(--muted) }

/* Light theme */
body.light{
  --bg:#f8fafc; --fg:#0f172a; --card:#ffffff; --muted:#64748b; --accent:#16a34a; --danger:#dc2626;
}
body.light input, body.light textarea, body.light .actions button{ background:#f1f5f9; color:var(--fg); }
body.light .topbar{ background:#ffffff; border-bottom:1px solid #e5e7eb; }
