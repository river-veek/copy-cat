import React from "react";

const chrome = window.chrome;
chrome.commands.onCommand.addListener((command) => {
    console.log(`Command "${command}" triggered`);
  });

export default function Paste() {

    

    return (
        <div>
            <p>[TEST]</p>
        </div>
    )
}