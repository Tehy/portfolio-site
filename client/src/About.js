import React, {useState} from "react";

export default function About() {
  let img = (i) => {
    return (
      <img
        alt={i}
        title={i}
        src={
          "/img/" +
          i +
          (["azure-appservice", "mongodb", "dotNET"].includes(i) ? ".png" : ".svg")
        }
      />
    );
  };

var contentListText =
(<ul>
<li>dotNET</li>
<li>dotNET efcore</li>
<li>dotNET MVC</li>
<li>C#</li>
<li>React</li>
<li>JS</li>
<li>NODE</li>
<li>JAVA</li>
<li>Php</li>
<li>AZURE</li>
<li>Google Cloud</li>
<li>AWS</li>
<li>azureDB</li>
<li>mongoDB</li>
<li>python</li>
<li>docker</li>
<li>html</li>
<li>css</li>
<li>android</li>
<li>linux</li>
<li>git</li>
</ul>)
var contentListImages =(<div className="about-img">
{img("dotNET")}
{img("python")}
{img("docker")}
{img("html")}
{img("javascript")}
{img("reactjs")}
{img("nodejs")}
{img("linux")}
{img("android")}
{img("azure-appservice")}
{img("google-appengine")}
{img("git")}
{img("mongodb")}
</div>)

  const [count, setCount] = useState(0);
  var doneContent = count % 2 === 0 ? contentListImages : contentListText
  function clicker(){
    setCount(count+1)
  }
  return (
    <div className="content">
      <h1>About</h1>
      <div className="about">
        <div className="about-text">
          <h1>Me</h1>
          <ul>
            <li>Developer</li>
            <li>Finland</li>
          </ul>
        </div>
        <div className="about-icons" onClick={()=>{
          clicker()
        } } >
          <h2>What I've done</h2><p className="about-icons-clicker-text">click me</p>
          {doneContent}
        </div>
      </div>
    </div>
  );
}
