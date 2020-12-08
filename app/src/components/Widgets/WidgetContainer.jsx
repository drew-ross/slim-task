import React from 'react';

// Component which can be toggled on/off to display child component widget
export const WidgetContainer = ({ component, isOn }) => {

  const Widget = component;

  return (
    <>
      {
        isOn &&
        <section className='WidgetContainer'>
          <Widget />
        </section>
      }
    </>
  );
};