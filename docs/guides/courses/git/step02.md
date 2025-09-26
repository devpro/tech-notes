# Step 2

Now that git is configured, let's create a first repository!

* It can be done anywhere:

`mkdir dojo-git; cd dojo-git; git init`

* Let's add some content:

`echo "Dojo git" > README.md; touch dummy.txt

* Look at the git status:

`git status

* Stage the local changes:

`git add README.md`

* Commit this new version:

`git commit -m "First commit with README file"`

* Look at the new status:

`git status`

* Display the log history:

`GIT_PAGER=cat git log`

We need to have this `dummy.txt` file but we don't want to commit it

* Add a line in the gitignore file

`echo "dummy.txt" >> .gitignore`

* Stage and commit the change

`git add .; git commit -m "Initiate gitignore with dummy file"`

* You status is now clean!

You can now play as you want (except for push & pull as there is no remote defined).

References: [Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
