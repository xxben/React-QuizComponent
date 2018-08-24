import React, { Component } from "react";

class QuizQuestion extends Component {
  render() {
    return (
      <div>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="button">
          <ul>
            <li>{this.props.quiz_question.answer_options[0]}</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default QuizQuestion;
