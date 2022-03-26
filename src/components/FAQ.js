import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h2>How React works?</h2>
      <p>React is a library. For structure user interfaces. This is perfect because, more frequently than not, this is all we want. The stylish part about this description is that it highlights React is simplicity. It is not a mega framework. It is not a full- stack result that is going to handle everything from the database to real- time updates over web socket connections. We do not actually want utmost of thesepre-packaged results, because in the end, they generally beget more problems than they break. Facebook sure did hear to what we want.</p>
 
      <h2>Different between props and state</h2>
      <p>
        <b>Props</b><br /><br />Props is  short for properties. It is the set of attributes that are passed from a parent component to a child component. These can be data variables or functions.
Props  are primarily used to communicate between parent and child components. Moreover, props cannot be altered inside the child component.
 
     <br/><br/>
  <b> State</b><br/><br/>The state  is a set of variables that determine the current condition of the component. The state of a component is internal, i.e., defined inside the component and changeable only within the component. Any change in state renders the component again. 
      </p>
        </div>
    );
};

export default FAQ;