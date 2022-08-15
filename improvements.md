- Feedback : SideNav (see what to do with top)
- Make filler tickets content (with plusieurs acc, create accs with Firstname Martin John David)
- Check fix logout not aligned

Later :
- Team Ticket Logo ? At least better design/fonts if just text
- Upgrade design of new ticket et history
-  Pagination on History
- Pagination for ticket feed ?
- Add local history for each ticket ?
- put loading skeleton for ticket feed (et autres too)
- Recheck Chris Nyce bug tracker sick landing page
- Refactor a bit
- Form validation (auth ? new ticket done now)
- Refeedback doublebar for title, maybe juste virer ? voir feedback sans screenshare
- Add filter (today, 1 week, 1 month) in history ?
- Button back to feed in ticket details ? (need to see which feed we come from)
- check le server side render thingy
- Put a search on the topBar ?
- Switch to Tailwind
- Switch to hamburger only rather than hover expend (+ hamburger pour user) quand mobile size
- Clean/split updates and other changes so I can clean my optional changes? in the type interface
- Make small modal on success update of ticket
- Check confirmations que firebase request succesfull avant de dispatch le local state
- Form validation error display in newTicket form
- Put regex on sidenav Active ticket so that tickets/feed and tickets/id get taken ?
- Put something if ticket not found in ticket details / Faire un component pour ticketNotfound in ticket details

- Manage + display errors for auth singin/signup
- Make sorting priority/status custom order rather than just sorted alphabetically
- Add ascending / descending options for query
- Add profile picture (with default one ?) to users ? Can put it in ticket preview then
- Team/assign people to tickets


Less important :
- Keep in local storage sorting history pour directement le reput (need router guard/resolver a priori)
- passer le fetch de data de la database en observable ? (et du coup plus besoin de dupliquer les changement de state database + local state)
- add hover on ticket title (in preview) that shows a popup with ticket message and reply button