Hello :),

in this file I will try to summarize my work on this task.

I believe that I have completed ~90% of task requirements, and if I had more time, I would complete it 100%, but I have most regret that I have missed some opportunities to make improvements in code, especially in term of reusability, so these are some improvements I would make if I had more time (due to personal obligations):

- utilize context api in greater measure and avoid few instances of "mild" prop drilling,
- extrapolate some functions and components and make them a bit more flexible, reusable, and in term with DRY,
- maybe implement JWT usage on login...

but as I said, due to lack of free time, I went with idea to create "MVP" first, and cover as much of functionalities, and later refactor where improvements are possible, but I did not have enough time for that.

Task overview/notes:

- for login I went with simplest solution, that would be enough for "proof of concept"
  - just in case that regex I use for email and password act funny, here are email and username that are in valid, as described in requirement, and work:
    - a.bcde@mail.com
    - abcdE4#f
- for data I used mockAPI, and you can check them here (if you cant view it, let me know, maybe I need to add you as a collaborator):
  - https://mockapi.io/projects/645d0d3c250a246ae316554d
    - https://645d0d3c250a246ae316554c.mockapi.io/recipes
    - https://645d0d3c250a246ae316554c.mockapi.io/products
- for structure I went with React (Router and Context),
- for CRUD operations, data fetching, server state and data caching I utilized React Query
- for styles and design I went with custom SCSS and improvised a layout,
- for images I went with a collection of icons, and I have put in 3 additional icons, in addition to 10 you see initially, there are (meat, cheese, jam), so in field imageURL just put those words to get proper icon rendered,
- for versioning I of corse used git, and you can track progress there, if needed,
- for deployment, I used Github pages

If you experience any difficulties with using/logging/operations on tack, or have any additional questions, please feel free to reach out.
