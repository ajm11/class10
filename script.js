
window.onload = async function(){
      // Add an input
      var addForm = document.createElement('INPUT');
      addForm.setAttribute("type","text");
      addForm.setAttribute("id","inputForm")
      addForm.setAttribute("placeholder","Sub reddit name here");
      addForm.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          document.getElementById("BUTTONID").click();
        }
      });
      document.body.appendChild (addForm);
  
      // Add a submit button
      var addButton = document.createElement('BUTTON');
      addButton.setAttribute("id","BUTTONID");
      addButton.innerHTML = "Submit";
      addButton.addEventListener('click', async function(){
        // Delete all existing posts
        let arePosts = document.getElementById("allThePosts");
        if (arePosts != null){
          arePosts.remove();
        };

        // Get form input
        let formInput = document.getElementById("inputForm").value;

        // Scrape Reddit
        let r = await fetch('https://www.reddit.com/r/'+ formInput +'/.json');
        let responseJSON = await r.json();
        
        // Display all posts
        let postHolder = document.createElement('div');
        postHolder.setAttribute("id","allThePosts");
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
  
          postHolder.appendChild(header);
          document.body.appendChild(postHolder);        
        }
  
      });
      document.body.appendChild(addButton);

      // Fetch is built in
    // Await tells us to wait for the request to finish
  
  
    //console.log("hi");
  }
  