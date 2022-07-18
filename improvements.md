- Design like benci
: Put nav in 2 div with one logo div (same width as side nav) + wider nav (responsive)
: better icons for leftNav
: Nav parts: Dashboard/stats , All tickets, (new ticket?), archived/closed tickets, (history ?)

- Fix date
- Name/branding : Team Ticket ?
- Redo ticket feed design : smaller height et less space in between (need like 10ish tickets par page izi) + put project/type in display
- Better design for active leftNav
- Redesign new ticket (can check design for update ticket)
- Do History (need to add stats data in tickets as well)

try :
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0,0,0,.12);

Later :
- Team/assign people to tickets
- Pagination for ticket feed
- Refactor a bit
- Put regex on sidenav Active ticket so that tickets/feed and tickets/id get taken
- check le server side render thingy
- Add un title pour les pages quelque part (soit dans la Nav soit dans each page) : probably juste dans la page pour ticket feed on top : All Tickets
- put home page ('/') into redirect to ticket feed ?
- Put a search on the topBar ?
- Faire une partie archived tickets ?
- Make small modal on success update of ticket
- Check confirmations que firebase request succesfull avant de dispatch le local state

- Put something if ticket not found in ticket details
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