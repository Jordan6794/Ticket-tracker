- Feedbacks : History display, History card title ?
: Dashboard "Ticket by" title ? general stats title ? Put pie Name/title in bold ? same color?
: New ticket page (and double title remove ?)
: SideNav (see what to do with top)
: Ticketfeed updated
- Make everyting responsive

Design:
- Finish sideNav : improve top of leftNav, just remove margin top? newTicket in nav ? + make responsivity (expand on hover on smaller and hanburger on mobile)

Later :
- Make filler tickets content
-  Pagination on History
- Pagination for ticket feed ?
- Team Ticket Logo ? At least better design/fonts if just text
- Add local history for each ticket ?
- Refactor a bit
- Form validation (auth ? new ticket done now)
- Add filter (today, 1 week, 1 month) in history ?
- Button back to feed in ticket details ? (need to see which feed we come from)
- Put regex on sidenav Active ticket so that tickets/feed and tickets/id get taken
- check le server side render thingy
- put auth redirectguard
- Put a search on the topBar ?
- Clean/split updates and other changes so I can clean my optional changes? in the type interface
- Make small modal on success update of ticket
- Check confirmations que firebase request succesfull avant de dispatch le local state
- Form validation error display in newTicket form

- Put something if ticket not found in ticket details / Faire un component pour ticketNotfound in ticket details
- Manage + display errors for auth singin/signup
- Make sorting priority/status custom order rather than just sorted alphabetically
- Add ascending / descending options for query
- Add profile picture (with default one ?) to users ?
- Team/assign people to tickets


Less important :
- Keep in local storage sorting history pour directement le reput (need router guard/resolver a priori)
- passer le fetch de data de la database en observable ? (et du coup plus besoin de dupliquer les changement de state database + local state)
- add hover on ticket title (in preview) that shows a popup with ticket message and reply button