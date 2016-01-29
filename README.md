# Project-Board

## Install

- install jdk (for e2e tests)
- clone
- brew install node
- npm install -g grunt-cli

## Run

- npm start

## Tests

### Unit Tests

- npm test

### End 2 End Tests

(with local website running)
- npm run protractor

## Updates

### Tool Dependencies

- npm update

### Angular Dependencies

- bower update


## How it works

### Static Files

To store your static files (images and docs) use the static folder

### Team

To add a team member just add to the team.html file inside the team folder
```
<div class="col-sm-2 col-md-2 col-sm-offset-3">
  <div class="thumbnail">
    <img src="static/img/Mario.jpeg" alt="Sample image" class="img-circle" />
    <div class="caption">
      <h3>Mario Rossi</h3>
      <p>CEO</p>
      <p>
        <a role="button" class="btn btn-default" href="mailto:mario.rossi@startup.com"><i class="fa fa-envelope"></i></a>
        <a role="button" class="btn btn-default" href="https://it.linkedin.com/pub/fake-mario-rossi"><i class="fa fa-linkedin"></i></a>
      </p>
    </div>
  </div>
</div>
```

#### Resources

Store a resource by adding it to the static folder.
Use the resources.json file to make a resource available on your board.

```

[
  {
    "name": "Logo",
    "description": "Our amazing logo",
    "url": "static/img/AmazingLogo.png"
  },
  {
    "name": "Demo #1 Presentation",
    "description": "First Demo Presentation",
    "url": "static/img/Demo1.pdf"
  },
  ...
]
```
In resource.html add the links to your social network profiles

### Sprint

Use the sprints.json file (sprint/sprints/sprint.json) to add a Sprint
to your project Board

```
[
  {
    "id": "1",
    "goal": "<Sprint Goal>",
    "estimation": "<Estimation_MD>",
    "start": "08/02/2016",
    "end": "18/02/2016",
    "demo": "18/02/2016"
  },
  ...
]
```
Create a Sprint folder inside sprint/sprints (i.e. sprint/sprints/sprintN, where
N is the sprint number) with two files:
- sprint_N.json (where N is the sprint number)
- stories.json

sprint_N.json
This file contains the information of the sprint you've just added in
the sprint.json file.
```
{
  "id": "1",
  "goal": "<Sprint Goal>",
  "estimation": "<Estimation_MD>",
  "start": "08/02/2016",
  "end": "18/02/2016",
  "demo": "18/02/2016"
}
```

stories.json
This file contains all the stories you have planned to work on during the sprint
```
[
  {
    "id": "1",
    "name": "Story name",
    "category": "Category name (DEV, BIZ DEV, TEAM...)",
    "importance": "In a range from 0 to 100",
    "estimation": "Estimation in MD",
    "demo": "What are you going to show at the demo for this story",
    "notes": "additional notes, if any",
    "links": "important links, if any",
    "assigned": "Member and MD, Member and MD"
  },
  ...
]
```
