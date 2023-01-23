# RN_Starter
<p align='justify'>
In this repo I'm registering my progress on React Native course, to remember and share to someone else who, like me, is getting started and is interested.<br/>
</p>

* [Setup Enviroment](#setup-enviroment)
* [Getting Started](#getting-started)
* [Working with Content](#working-with-content)
* [List Building](#list-building)

## Setup Enviroment
<p align='justify'>
The first step consists to configure the enviroment, for that I followed the <a href="https://reactnative.dev/docs/environment-setup">React Native Tutorial</a> to setup React Native CLI on Windows plataform.<br/>
As suggested, I installed the <a href="https://chocolatey.org/install">Chocolatey</a>, that I used to install the OpenJDK, and <a href="https://github.com/coreybutler/nvm-windows">nvm-windows</a> to install and manage the NodeJS versions. Then, to test my applications, I installed the <a href="https://developer.android.com/studio">Android Studio</a> and setup a device. I had no idea, but all this work would be for nothing, because the course uses Expo to test the apps. I just started this one after setup my enviroment because I was moving, and would gave no network connection for a few days, and the little bit experience I had with React Native before tath required an emulator to run the applications. But anyway, this enviroment that I created certainly will be useful later on.

So, I just started the course...
</p>

## Getting Started
<p align='justify'>
Initially, the instructor gave me a base project that we will use for something along the course to practice some especifical features. I downloaded, extract on my workspace directory and open that directory on terminal. Next, as instructed by the teacher, I ran the command <code>npm install --legacy-peer-deps</code> to install all project dependecies. And it's occurred all good, nothing errors! After that, I ran <code>npm start</code> to open the React Native bundler which gotten my code ready to be ran on a mobile device. Than I downloaded the Expo Go on App Store and scanned the QR code from RN Bundler and... <i>Voilà</i>! the app was running on my phone.
</p>

## Working with Content
<p align='justify'>
Instructor says: "In general, every different componet file we create is gonna have the same four different parts". In the first part, we're always write the imports we need to create our component. In part two, we're gonna create the component itself. For now, understand component as "a funcion tha returns some JSX".
In third part, we're create a stylesheet to style our component. And, in the last one, we're export the component, allowing us to use it elsewhere in our project.
</p>
<div align='center'>
  <img src='./diagrams/react-component-file.png' />
</div>
<p align='justify'>
Next, I did the <a href='https://github.com/gabrielkreusch/RN_Starter/releases/tag/1.2.1'>JSX overview exercise</a>.
</p>

## List Building
<p align='justify'>
Well, we're always gonna start off with some array of records, be it numbers, string, objects, or anything else we want to list on the screen. At this point, to turn an array into a series of React components, we're going to use FlatList, another one of those primitive elements from React Native.
  
To turns an array into a list elements with FlatList element we are required to pass in prop 'data' the array of data we wants to display. Also required to pass in a 'renderItem' prop a function that will turn each individual item into an element; just like this:
</p>

```jsx
  const friends = [ { name: 'Friend #1'}, ... ];
  
  return (
    <FlatList
      data={friends}
      renderItem={(element) => {
        // element === { item: { name: 'Friend #1' }, index: 0 }
      }}
    />
  );
```
<p align='justify'>
Notice, the "element" argument is not the same that a list item, it have a couple of different different properties in it. If we want only the array's item we need to make use of ES 2015 destructuring. So rather than code above, we could write like this:
</p>

```jsx
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        // item === { name: 'Friend #1' }
      }}
    />
  );
```
<p align='justify'>
In order, the instructor said that I should see a warning, after ran the app, saying that it's necessary to provide a unique key to each element, otherwise, the React Native'll reload all the list every single update in the origin array; and, to avoid this, I should either explicitly specify these keys for each element or define a function in the 'keyExtractor' prop to do so. Well, it's not occurred. I believe this could have been fixed in some release between the one used by the instructor and mine. A default 'keyExtractor' function, for example. To test this I changed the 'keyExtractor' prop to a empty function, like below,  and... yes, I got the warning.
</p>

```jsx
    const friends = [
        { name: 'Friend #1' },
        { name: 'Friend #2' },
        { name: 'Friend #3' },
        ...
    ];

    return (
        <FlatList
            keyExtractor={() => {}}
            data={friends}
            renderItem={({ item }) => {
                return <Text>{item.name}</Text>
            }}
        />
    );
```
<p align='justify'>
So I really think that it's not necessary to provide these keys, but, for now, I'm just following as suggested by the instructor.
  
The instructor also introduced two more props: the 'horizontal' to make a horizontal scroll on our FlatList; and 'showsHorizontalScrollIndicator' that allows to hide the scrollbar. And then asked for a little <a href='https://github.com/gabrielkreusch/RN_Starter/releases/tag/1.3.1'>exercise</a> about listing.
</p>
