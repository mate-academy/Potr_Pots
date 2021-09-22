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
- The speed of animations is the same throughout the landing page (for example, increasing when hovering or moving blocks when scrolling)
- Placeholders in the forms suggest what to enter, and if there is a validation of the form, then it is clear in what format to enter the phone number
- Make sure everything looks neat on mobile and without horizontal scrolling
- Add favicon
- Add a smooth scroll for the whole page
- When you try to send the form there is no 405 error and the form is automatically cleared after submit and is scrolled to the top of the page or the page is reloaded
- After clicking the menu buttons, the landing page will scroll exactly to the beginning of the desired block (exactly where its section begins)
- The user must have the opportunity to write 2-3 lines of text in the message field
- When you try to send the form there is no 405 error and the form is automatically cleared after submit and is scrolled to the top of the page or the page is reloaded
- All the social icons in the footer should be clickable and open the real social networks of the brand in a new tab
- The shopping cart button is clickable and leads to the feedback form
- It is convenient for the user when clicking on Address, it opens in a new tab in Google Maps


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
