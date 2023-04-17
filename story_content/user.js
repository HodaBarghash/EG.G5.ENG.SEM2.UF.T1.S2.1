function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YZ1m0h6et7":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwXB_jubCU0WKkGt6n70MVLyEO4qRXrjfQ7FuCjXANr49C0QDr2dBNn8dgL1XjDSyOzaQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

