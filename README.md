# 🎮 XteamHub

**XteamHub** é um projeto web desenvolvido com Django para gerenciar e exibir uma lista de jogos via Game Pass, com sistema de paginação, layout temático em dark mode, e organização modular de templates e estilos.

---

## 🚀 Funcionalidades

- Listagem de jogos com paginação (4 por página)
- Estilização com tema escuro e laranja (inspirado em visual gamer)
- Sistema de templates com herança (`base.html`)
- Estrutura organizada com arquivos CSS separados por página
- Painel administrativo para cadastro de jogos

---

## 🛠️ Tecnologias Utilizadas

- Python 3.13
- Django 5.x
- HTML5
- CSS3 (Flexbox)
- SQLite3 (banco de dados padrão do Django)

---

## 📁 Estrutura do Projeto

xteamhub/
├── games/
│ ├── models.py
│ ├── views.py
│ ├── urls.py
│ ├── templates/games/
│ │ ├── base.html
│ │ ├── game_pass.html
│ │ ├── amigos.html
| | └── home.html
| | └── suporte.html
| | └── tema.html
├── static/
│ ├── css/
│ │ └── game_pass_styles.css
| | └── home_styles.css
| | └── amigos_styles.css
| | └── suporte_styles.css
| | └── tema_styles.css
│ └── images/
├── db.sqlite3
├── manage.py
└── xteamhub/
└── settings.py

👤 Autor
Samuel Souza de Araújo
Projeto educacional e experimental para prática com Django + Frontend customizado
