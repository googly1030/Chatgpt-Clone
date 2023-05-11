const API_KEY="YOUR API_KEY HERE";
const SubmitButton=document.getElementById("submit");
const OutputElement = document.querySelector("#output");
const InputElement = document.querySelector("#input");
const historyElement = document.querySelector(".history");
const buttonElement = document.getElementById("button");

async function getMessage()
{
    console.log("Button Clicked");
    const options = 
    {
        method: 'POST',
        headers:
        {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": 'application/json'
        },
        body:JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: InputElement.value}],
            max_tokens: 100,
          })
    }
    try
    {
       const response= await fetch("https://api.openai.com/v1/chat/completions",options)
        const data  = await response.json();
        console.log(data);
        OutputElement.textContent=data.choices[0].message.content;
        if(data.choices[0].message.content)
        {
           const pElement = document.createElement("p");
              pElement.textContent = InputElement.value;
              historyElement.append(pElement);
        }
    }
    catch(error)
    {
        console.log(error);
    }
}
SubmitButton.addEventListener("click",getMessage);
function clearinput()
{
    InputElement.value="";
}
button.addEventListener("click",clearinput);
