- Design
- Faire que click sur un sorting close le dropdown (put open in redux store)
- put active classes in SideNav
- Refactor a bit
- Do Dashboard stats (need to add stats data in tickets)
- Do History (need to add stats data in tickets as well)

Later :
- Add un title pour les pages quelque part (soit dans la Nav soit dans each page)
- put home page ('/') into redirect to ticket feed ?
- Put a search on the topBar ?
- Faire une partie archived tickets ?
- Make small modal on success update of ticket
- Check confirmations que firebase request succesfull avant de dispatch le local state

- Faire un onglet changes history ? (not hard, need to make a collection history with an array of Changes objects (make type))
- Manage + display errors for auth singin/signup
- Implement archiving ?
- Make sorting priority/status custom order rather than just sorted alphabetically
- Put un routing guard pour que le mec puisse pas acces auth quand logged in ?
- Add ascending / descending options for query
- Make a dropdown to edit status/prio from ticketpreview ?
- Add profile picture (with default one ?) to users ?
- Faire un component pour ticketNotfound in ticket details
- passer le fetch de data de la database en observable ? (et du coup plus besoin de dupliquer les changement de state database + local state)
- add hover on ticket title (in preview) that shows a popup with ticket message and reply button

- Keep in local storage sorting history pour directement le reput (need router guard/resolver a priori)