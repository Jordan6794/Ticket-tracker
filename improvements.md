- Design
- Make edit some things in preview ? (delete at least, solve too ? maybe change prios/status?)
- Refactor a bit


Later :
- Make small modal on success update of ticket
- Put a slightly green color to solved tickets (and other status too)
- Put small icon/visual for priorities ?
- Check confirmations que firebase request succesfull avant de dispatch le local state

- Faire un onglet changes history ? (not hard, need to make a collection history with an array of Changes objects (make type))
- Manage + display errors for auth singin/signup
- Implement archiving ?
- Make sorting priority/status custom order rather than just sorted alphabetically
- Put un routing guard pour que le mec puisse pas acces auth quand logged in ?
- Add ascending / descending options for query
- Make a dropdown to edit status/prio from ticketpreview ?
- Faire que click sur un sorting close le dropdown (need prop drilling through children)
- Add profile picture (with default one ?) to users ?
- Faire un component pour ticketNotfound in ticket details
- passer le fetch de data de la database en observable ? (et du coup plus besoin de dupliquer les changement de state database + local state)

- Keep in local storage sorting history pour directement le reput (need router guard/resolver a priori)