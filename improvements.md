- Do History
: Display history in history part
: add link to the ticket on history part
: Update history in DB (and load on app load obv)
- Nav parts: Dashboard/stats , All tickets, (new ticket?), archived/closed tickets, history 
- Copy the ticket page for closed/resolved tickets
- Do home/login page
- Fix date ?
- Make clicking outside of dropdown close dropdown (filter tickets)
- Put mes awaits in firebase foncts in await Promise.all

Design:
- Finish sideNav : improve top of leftNav, just remove margin top? + make responsivity (expand on hover on smaller and hanburger on mobile)
- Put pie name/title in bold ?
- Redo ticket feed design : smaller height et less space in between (need like 10ish tickets par page izi) + put project/type in display
+ make un btn see more/edit in the design too, can not only be hover on title text
- Redesign new ticket (can check design for update ticket)
- Add un title pour les pages quelque part (soit dans la Nav soit dans each page) : probably juste dans la page pour ticket feed on top : All Tickets
: Need to see how I put le filtre toppart du coup
- Change Tickets icon in nav

Later :
- Team/assign people to tickets
- Pagination for ticket feed ?
- Team Ticket Logo ? At least better design/fonts if just text
- Add local history for each ticket ?
- Refactor a bit
- Add filter (today, 1 week, 1 month) in history ?
- Put regex on sidenav Active ticket so that tickets/feed and tickets/id get taken
- check le server side render thingy
- put auth redirectguard
- Put a search on the topBar ?
- Clean/split updates and other changes so I can clean my optional changes? in the type
- Make small modal on success update of ticket
- Check confirmations que firebase request succesfull avant de dispatch le local state

- Put something if ticket not found in ticket details
- Manage + display errors for auth singin/signup
- Make sorting priority/status custom order rather than just sorted alphabetically
- Add ascending / descending options for query
- Make a dropdown to edit status/prio from ticketpreview ?
- Add profile picture (with default one ?) to users ?
- Faire un component pour ticketNotfound in ticket details
- passer le fetch de data de la database en observable ? (et du coup plus besoin de dupliquer les changement de state database + local state)
- add hover on ticket title (in preview) that shows a popup with ticket message and reply button

- Keep in local storage sorting history pour directement le reput (need router guard/resolver a priori)