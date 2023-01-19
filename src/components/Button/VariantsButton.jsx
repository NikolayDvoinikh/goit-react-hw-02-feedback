// import PropTypes from 'prop-types';
import Button from './Button';

const VariantsButton = ({ clientFeedback, feedbackNames }) => {
  const variants = feedbackNames.map(feedbackName => (
    <p key={feedbackName}>
      <Button onClick={() => clientFeedback(feedbackName)}>
        {feedbackName}
      </Button>
    </p>
  ));
  return <>{variants}</>;
};
export default VariantsButton;
