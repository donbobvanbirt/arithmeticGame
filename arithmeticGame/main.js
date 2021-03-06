let App = React.createClass({
 // set values for initial state
getInitialState() {
  return {
    newNumber: '',
    num1: 0,
    num2: 0,
    answer: 0,
    score: 0
  }
},

  randNumber() {
    let num = Math.floor(Math.random()*10);
    // console.log(num);
    // console.log('thh');

    return (
      num
    )
  },

  addVal(e) {
    // console.log(this.state);
    let val = e.target.id;
    console.log('val:', val);
    this.setState({newNumber: this.state.newNumber + val});
  },

  clearVal() {
    this.setState({newNumber: ''});
  },

  start() {
    // let buttons = document.getElementById("buttons");
    document.getElementById("buttons").removeAttribute("class");
    document.getElementById("table").removeAttribute("class");
    document.getElementById("start").className = "hide";
    this.newProblem();
  },

  newProblem() {
    let num1 = this.randNumber();
    let num2 = this.randNumber();
    console.log('numbers: ', num1, num2);

    this.setState({
      num1: num1,
      num2: num2,
      answer: num1 + num2
    });

    document.getElementById("equation").innerHTML = `${num1} + ${num2}`;

  },

  nextProblem() {
    this.newProblem();
    document.getElementById("result").innerHTML = '';
  },

  skip() {
    let { answer } = this.state;
    if (!answer) {
      return;
    }
    this.decreaseScore();
    let correctAnswer = `Answer: ${answer}`;
    document.getElementById("result").innerHTML = correctAnswer;
    window.setTimeout(this.nextProblem, 4000);
  },

  increaseScore() {
    this.setState({score: this.state.score + 1});
  },

  decreaseScore() {
    this.setState({score: this.state.score - 1});
  },

  submit() {
    let { newNumber, answer, } = this.state;
    let number = parseInt(newNumber);
    let message;
    if (!answer || !number) {
      console.log('no problem');
      return;
    }
    console.log('number:', number);

    if (number === answer) {
      message = "CORRECT!!"
      // console.log("CORRECT!");
      this.increaseScore();
    } else {
      message = `WRONG! ${answer} was the correct answer`;
      // console.log("INCORRECT!");
      this.decreaseScore();
    }

    document.getElementById("result").innerHTML = message;
    // document.getElementById("equation").innerHTML = num1 + "+" + num2;

    this.clearVal();
    document.getElementById("equation").innerHTML = '';
    window.setTimeout(this.nextProblem, 4000);

  },

  render() {
    let { newNumber, num1, num2, score } = this.state;
    // console.log(randNumber());

    return (

      <div className="container">
      <div className="text-center">
      <h1>Arithmetic Game</h1>

      <table id="table" className="hide">
      <tbody>
        <tr>
          <td>
            <button className="btn btn-default" onClick={this.addVal} id="7">7</button>
          </td>
          <td>
            <button className="btn btn-default" onClick={this.addVal} id="8">8</button>
          </td>
          <td>
            <button className="btn btn-default" onClick={this.addVal} id="9">9</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="btn btn-default" onClick={this.addVal} id="4">4</button>
          </td>
          <td>
            <button className="btn btn-default" onClick={this.addVal} id="5">5</button>
          </td>
          <td>
            <button className="btn btn-default" onClick={this.addVal} id="6">6</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="btn btn-default" onClick={this.addVal} id="1">1</button>
          </td>
          <td>
            <button className="btn btn-default" onClick={this.addVal} id="2">2</button>
          </td>
          <td>
            <button className="btn btn-default" onClick={this.addVal} id="3">3</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="btn btn-default" onClick={this.addVal} id="0">0</button>
          </td>
          <td></td>
          <td>

          </td>
        </tr>

        </tbody>
        </table>

      <div id="input">
        <h3>{newNumber}</h3>
      </div>
      <div id="buttons" className="hide">
        <button onClick={this.submit} className="btn btn-success" id="submit">Submit</button>
        <button onClick={this.clearVal} className="btn btn-default" id="clear">Clear</button>
        <button onClick={this.skip} className="btn btn-default" id="clear">Skip</button>
        <h6 id="score">Score: {score}</h6>
      </div>
      <button onClick={this.start} className="btn btn-primary" id="start">Start</button>

      <h4 id="equation"></h4>

      <h4 id="result"></h4>


      </div>
      </div>
    )
  }


})



ReactDOM.render(
  <App/>,
  document.getElementById('root')

)
