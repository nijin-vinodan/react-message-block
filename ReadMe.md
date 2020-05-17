
Doing a React POC or building a production application? <b>react-message-block</b> is an easy to use package for showing <i>success/error/warn/info/custom</i> message blocks.

## Features

- Lightweight 
- Out of the box message stylings
- Custom Styling Options

## Installation

With Yarn

```
yarn add react-message-block
```

With npm

```
npm i --save react-message-block
```

## Documentation
You could view the documentation in <a href = "https://github.com/nijin-vinodan/react-message-block">Github Page</a> as well.

## Usage

react-message-block is compatible with both Class and Functional React Components.

### Basic Usage

```
import Message from 'react-message-block';
const App = () => {
    return (
        <div>
            <Message text = {'Congrats! You have installed this plugin'} />
        </div>
    )
}
```
<a href = "https://codesandbox.io/s/message-block-xj4g6" target = "_blank">View Example on Sandbox</a>


## Available Custom Props

By default, react-message-block comes up with the following properties. You could use the following to customize your message block out of the box.

<table>
  <tbody>
    <tr>
      <th>Prop</th>
      <th>Optional</th>
      <th>Default</th>
      <th>Possible Values</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>text</td>
      <td>Yes</td>
      <td></td>
      <td>Any String</td>
      <td>Display Message</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Yes</td>
      <td>info</td>
      <td>info | success | error | warn</td>
      <td>To show Loading Message</td>
    </tr>
    <tr>
      <td>onClose</td>
      <td>Yes</td>
      <td></td>
      <td>
        Callback func 
      </td>
      <td>Callback function to close the message block. Close Icon will appear along with the message block</td>
    </tr>
    <tr>
      <td>style</td>
      <td>Yes</td>
      <td></td>
      <td>
        Custom Style Object
      </td>
      <td>To apply user defined styles</td>
    </tr>
    <tr>
      <td>align</td>
      <td>Yes</td>
      <td>center</td>
      <td>
        center | left | right
      </td>
      <td>To align message text</td>
    </tr>
  </tbody>
</table>
<br/>

## Example

### <b>Custom HTML Layout</b>

Not happy with the one line message? You could always pass children within the <b>Message</b> component to display your custom message layout.

```
<Message type = 'info'>
    <h4>Message Heading</h4>
    <p>This is the message body</h4>
</Message>
```

```
<Message type = 'error'>
    <h4>Please check the following fields</h4>
    <ul>
      <li>Email is not valid</li>
      <li>Password and Confirm Password does not match</li>
      <li>Phone Number is already registered</li>
    </ul>
</Message>
```
<a href = "https://codesandbox.io/s/message-block-custom-children-hjcok"  target = "_blank">View Example on Sandbox</a>

### <b>onClose</b>
Many times, you would want to provide the feasibility of dismissing a message block. You could achieve it by passing <b><u>onClose</u></b> callback function as prop to the component.

```
<Message 
  text = 'Something went wrong' 
  type = 'error' 
  onClose = {handleClose} 
>
```
<a href = "https://codesandbox.io/s/message-block-with-close-hhb8m"  target = "_blank">View Example on Sandbox</a>


## What's Coming Up
<ul>
  <li>Icon for Messages</li>
  <li>Auto Hiding Message after N seconds</li>
</ul>

## Author
Nijin Vinodan