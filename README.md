# My Portfolio Site

## Typescript + React

I started this project using technologies with which I'm familiar because I wanted to quickly get it to a deployable state. React has been a tried and true framework for several projects of mine. Typescript, on the other hand, is new for me. This will be the first completed front end project I deploy with Typescript. In the other front-end project where I started using Typescript, I got stuck at integrating and testing Firebase. This project didn't have that level of complexity, and it went of without a hitch.

## TDD

I practiced using 'true' TDD for this project. As in, literally, not writing component code unless there was a test in place that indicated the present code was not sufficient. I'd grade myself at 75% for sticking to the strategy. I think it was most difficult for me to use this approach when I was unsure of the content I wanted to present. I modified some tests over and over before reaching a stable state. My learning from this is to TDD the existence of a component and its larger pieces, but to leave content/implementation details out of the tests. 

I encountered a philosphical question as I approached test-writing for user interaction. I decided to have project and technology hyperlinks that open in a separate tab and don't impact the state of the app. It is unclear if testing ths type of functionality is possible - it's browser-level functionality instigated at the app-level. I decided that this testing is outside the scope of the app.

I was introduced to the react-testing-library at a recent Meetup (thanks to AgilePDX's Mob Programming Workshop run by Jeff Patterson and Matthew Cochrane). I like how it encourages more specific test points than using shallow snapshot testing with Enzyme. Fortunately, there is an add-on library (react-test-renderer) that enables snapshot testing. I had one spot where a component snapshot captured all the information I wanted to test, without adding significant test fragility, and it saved me some time as well.

## Color Scheme

The colors of the site are inspired by the context highlighting color theme I use in VS Code - "dark+". I pulled the hex codes from the dark+ project on Github and inserted them into my global CSS vars file. Using color themes from a code editor further inspired the design, and I added the markup language touches (like <> and </>) in the headers.
Initially, I had a color scheme based on a photograph of dark trees and a bright, starry sky. Today, I decided I hated it (overall too dark, and with a lack of variation in the color palette). I'm glad I made the change.

## Favicon

The current favicon is a bit of artwork I created based on my initials. I used Krita to give the image a transparent background.

## GIF's

The images for a few of my projects are animated GIF's. A Google Chrome extension called 'Capture to a Gif' was used to record website content and download it as to an animated GIF.

Another useful GIF tool was an online GIF editor at [EZGIF.com](https://ezgif.com/crop).

## Responsive Aspects

For mobile users, my goal is to never display a single component/section that overwhelms the screen. To this end, the Bio and ProjectCard components have abbreviated mobile views. The Bio is simply truncated for mobile users. The ProjectCard component has 2 view states - collapsed and expanded. When the user clicks on the card, they are toggled between these 2 views. 

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Future Work: Star Wars

Source inspiration and code for Star Wars scrolling text is from Craig Buckler [Star Wars Scrolling Text in CSS3](http://www.sitepoint.com/css3-starwars-scrolling-text/)

This is an idea for putting more bling into my bio. My career story will be modified to read more like an episode in a movie series. The CSS will include a scrolling animation for the section containing the story. The same section will have 3D CSS translation to add perspective and an :after element will provide a fade-out point. The overall effect will look like the opening text of a classic Star Wars movie. 

## Future Work: Contact Form

I dislike the idea of having my email address available to the internet at large. Fortunately, there are a number of technologies that allow me to create a contact form. This way, people can still reach out, and I can get their email, and I don't have to respond with my email unless the contact is useful.

Netlify provides [form submissions](https://docs.netlify.com/forms/setup/#html-forms) that can be received in the Netlify site admin panel. Their admin system additionally provides [email notifications](https://docs.netlify.com/forms/notifications/#email-notifications) for submitted forms. I was tipped off to this Netlify feature by inspecting the source code on [Marcy Silverman's portfolio site](www.marcy-silverman.com) (Thanks Marcy!).

## Future Work: Use Intersection Observer

React Intersection Observer provides an indication of when a component enters the viewport. The viewport is the area of the screen visible to the user, and it changes as the user scrolls through the page. The main way I've seen this used is to delay the loading of a component until it is at the edge of visibility. This probably has some performance benefits and it has the nice side effect that on-entrance animations can actually be perceived by users.   

## Future Work: More Pages and a Navigation Bar

My initial plan for this site included some more pages with information about my adventures in Code Challenges and a page to show samples of the languages and technologies that I used in my EDA career. If that content is ever created, the site will need a navigation bar with breadcrumbs to show users around the site. I like the look of the [Tabs component](https://react-bootstrap.github.io/components/tabs/) in Bootstrap for this.
