
# Running:
### Run the server

The API for this project can be found
[here](https://github.com/jvillagomez/ServiceNowCodingChallenge). To make it available to the incident dashboard, clone the repository and run `npm install` then `npm start`. This will set the server endpoint to port 3000.


### Available Scripts

In the project directory, you can run:

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


# Components:

**Card** 

Displays a card with title and value 

Usage: 
`<Card/>`

Properties:
- ***title*** - Card title
- ***value*** - Card value
- ***width*** - if unset defaults to 100%
- ***to***  - optional, determines if card will pass React Router's `to` attribute to enable card to serve at React Router Link
- ***linkStyle*** - Accepts styling that would appy to link tags (`<a>`)

**DataTable** 

Displays a columnar zebra table

Usage: 
`<DataTable/>`

Properties:
- ***data*** - JSON data in following format:
    ```JSON [
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

- ***columnMap*** - Returns columns in order defined. Columns that don't contain a key:value as passed in this prop won't be rendered even if they exist in the JSON passed in the `data` prop. Custom column names can be indicated. 

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


# Tools Used:

Prettier for code formatting

ESLint for linting

lint-staged NPM package to set-up pre-commit hook to apply Prettier and ESLint

Create-react-app to set-up project template

React Router to set up page routing

node-sass for Sass support

