# POTR POTS landing page

Implement landing page according to [Figma design](https://www.figma.com/file/B4inXKHcMH3ChrTnXEJKS1/POTR-POTS-(Copy)?node-id=0%3A1) - Use BEM and SCSS
- The design 1440px
- Notebook 1280px
- Tablet 768px
- Mobile (> 320px)

1. Implement the header with `nav`.
1. Implement `For whom` block.
1. Implement `Features` block.
1. Implement `POTR team` block with the card reused 3 times.
1. Implement `Materials` block with 4 process cards.
1. Implement `POTR size` block.
1. Implement `Benefits` block.
1. Implement `Questions` block
1. Implement the footer.

## HR important moments
- Скорость анимаций на всем лендинге одинаковая (например увеличение при наведении или выезд блоков при скроле)
- Placeholder в формах подсказывают что именно ввести, а если стоит валидация формы, то понятно в каком формате вводить номер телефона
- Убедитесь, что с мобильных выглядит все аккуратно и без горизонтальной прокрутки
- Добавьте favicon
- Добавьте мягкий скролл при клике на меню до соответствующих блоков страницы
- Кнопки в футер меню также должны быть кликабельны и вести на блоки в лендинге.
- После нажатия кнопок меню лендинг скролит именно на начало нужного блока (именно, туда, где начинается его секция)
- Важно, чтобы у пользователя была возможность удобно написать текст в 2-3 строки в поле message
- При попытке отправить форму нет 405 ошибки, нужно чтобы данные вносились, форма очищалась, а после отправки перекидывало на верх страницы или происходила перезагрузка страницы
- Иконки соцсетей в лендинге при нажатии пусть ведут на реальные соц.сети
- Кнопка корзины кликабельна и ведет на форму обратной связи
- Для пользователя удобно, когда при клике на Address, он открывался в новой вкладке в гугл-картах. 

## Github flow
1. **Fork** the repo.
2. **Clone** the forked one. (The project link should have your name but not `mate-academy`)
3. Run `npm install` (or just `npm i`)
4. Run `npm start`.
5. Open one more terminal window for the next steps
6. `git checkout -b develop` - to create new branch and switch on it
7. Write you code in `src` folder
8. Run `npm run lint` and fix code style errors.
9. Run `npm run deploy` to deploy your solution to `gh-pages`
10. `git add . && git commit -m 'solution'` to save your changes
11. `git push origin develop` - to send you code for PR
12. Create a Pull Request (PR) from your branch `develop` to branch `master` of original repo.
13. Replace `<your_account>` with your Github username in the
  [DEMO LINK](https://<your_account>.github.io/Potr_Pots/)
14. Copy `DEMO LINK` to the PR description

> To update you PR repeat steps 7-11

--> [CHECKLIST](https://github.com/mate-academy/Potr_Pots/blob/master/checklist.md)
