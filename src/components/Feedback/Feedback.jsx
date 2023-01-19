import { Component } from 'react';
import VariantsButton from 'components/Button/VariantsButton';
// import styles from './feedback.module.scss';

const feedbackNames = ['good', 'neutral', 'bad'];
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clientFeedback = feedbackName => {
    this.setState(prevState => {
      return {
        [feedbackName]: prevState[feedbackName] + 1,
      };
    });
  };

  render() {
    return (
      <section>
        <h2>Please leave feedback</h2>
        <VariantsButton
          feedbackNames={feedbackNames}
          clientFeedback={this.clientFeedback}
        />
      </section>
    );
  }
}
export default Feedback;
