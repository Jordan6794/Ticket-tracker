- Feedback History display
- Small design feedbacks : Dashboard Ticket by title ? general stats title ? History card title ?
- Other design feedbacks : New ticket page (and double title remove ?)
- Do home/login page
- Change colors of dashboard

Design:
- Finish sideNav : improve top of leftNav, just remove margin top? newTicket in nav ? + make responsivity (expand on hover on smaller and hanburger on mobile)
- Put pie name/title in bold ?
- Redo ticket feed design : smaller height et less space in between (need like 10ish tickets par page izi) + put project/type in display
+ make un btn see more/edit in the design too, can not only be hover on title text

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