
window.onload = async function(){
      // Add an input
      var addForm = document.createElement('INPUT');
      addForm.setAttribute("type","text");
      addForm.setAttribute("id","inputForm")
      addForm.setAttribute("placeholder","Sub reddit name here");
      document.body.appendChild (addForm);
  
      // Add a submit button
      var addButton = document.createElement('BUTTON');
      addButton.innerHTML = "Submit";
      addButton.addEventListener('click', async function(){
        let formInput = document.getElementById("inputForm").value;
        let r = await fetch('https://www.reddit.com/r/'+ formInput +'/.json');
        let responseJSON = await r.json();
        
          for(post of responseJSON.data.children) {
            let header = document.createElement('h3');
            let anchor = document.createElement('a');
            let details = document.createElement('p');
            let pic = document.createElement('img');

            header.style.border = "thin solid gray";
            header.style.backgroundColor = "lightgray";
            header.style.padding = "5px";

            anchor.style.color = "black";
            anchor.style.fontFamily = "arial,sans-serif";
            anchor.style.textDecoration = "none";
            details.style.color = "gray";
            details.style.fontFamily = "arial,sans-serif";
            details.style.fontSize = "x-small";

            anchor.href = post.data.url;
            anchor.innerText = post.data.title;
            details.innerText = post.data.author_fullname;
            pic.src = post.data.thumbnail;

            header.appendChild(anchor);
            header.appendChild(details);
            header.appendChild(pic);
    
            document.body.appendChild(header);
          }
          
      });
      document.body.appendChild(addButton);

      // Fetch is built in
    // Await tells us to wait for the request to finish
  
  
    //console.log("hi");
  }
  