## React Incident Dashboard
##### Live Demo

http://incidents.surge.sh/

I built this project as an exercise in building responsive React components that could be used, for instance in a UI component library. The two main components are [Card]([#card) which provides status information for the data table, and [DataTable](#datatable) which presents JSON data in a zebra table. I opted to implement all the UI features myself without using any component libraries with the exception of React Router. 

##### If I decide to spend more time on this project here's what I would do next:

- Modify dashboard so that it was more flexible, adding props for different card types, server location, and column mapping
- Add ability to sort columns 
- Perhaps add some kind of visual mapping between the card color and the summary indicator to tie more clearly that the data table has been updated on click. For instance, clicking between “All incidents” and “Open” displays the similar data and isn’t immediately apparent the data has changed. 
- Break out Sass into SCSS partials for each component styling
- Add version that removes 'All Incidents' card and attempts a design with a "Show all incidents" link. I like the UX of including the "All incidents" card but the 5 card view doesn't look too appealing on smaller screens when the cards are stacked. 
- Fix the bug that occurs when clicking between two cards when the loading delay is removed. It has to do with something similar to [this issue](https://www.reddit.com/r/reactjs/comments/992yyy/react_router_not_rerendering_components/) I originally created the app without react router, but decided that because the Coding Test documentation mentioned 'pages' explicitly I should implement them. From a user perspective it's nice also because users could bookmark 'pages' by incident type. Before adding React Router, I added a delay in between clicking the cards to demonstrate page loading, so I didn't notice the bug until I removed the delay. 
- Fix issue where .eslintcache file isn't being ignored by .gitignore


## Tools Used:

- Prettier / ESLint precommit hook for code formatting and linting via lint-staged NPM package

- Create-react-app to set-up project template

- React Router to set up page routing

- node-sass for Sass support



## Running:

### Available Scripts

In the project directory, you can run:

`yarn install` - to install project dependencies

`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:8082](http://localhost:8082) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Components:

#### **Card**

Displays a card with title and value

Usage:
`<Card/>`

Properties:

- **_title_** - Card title
- **_value_** - Card value
- **_width_** - if unset defaults to 100%
- **_to_** - optional, determines if card will pass React Router's `to` attribute to enable card to serve at React Router Link
- **_linkStyle_** - Accepts styling that would appy to link tags (`<a>`)

#### **DataTable**

Displays a columnar zebra table. 

Usage:
`<DataTable/>`

Properties:

- **_data_** - JSON data in following format:

  ````JSON [
  {
  "first_name_data": "John",
  "last_name_data": "Smith",
  "age":25
  },
  {
  "first_name_data": "Mary",
  "last_name_data": "Martin",
  "age":42
  }
  ]```

  outputs:

  | first_name_data | last_name_data | age |
  |-----------------|----------------|------
  | John            | Smith          | 25
  | Mary            | Martin         | 42

  ````

- **_columnMap_** - Returns columns in order defined. Columns that don't contain a key:value as passed in this prop won't be rendered even if they exist in the JSON passed in the `data` prop. Custom column names can be indicated.

```JSX
columnMap={{
    {/*First column, no custom name*/}
    "last_name_data":"last_name_data",
    {/*Second column, custom name */}
    "first_name_data":"First Name",
    }}/>
    {/*Age column will not be in output even though it exists in JSON*/}
```

    outputs:

    | last_name_data | First Name|
    |----------------|-----------|
    | Smith          | John      |
    | Martin         | Mary      |


## Branches

loadError and emptyResponse branches demonstrate a failed server response and empty data response, respectively.
