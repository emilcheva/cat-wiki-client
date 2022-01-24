import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { colors } from '../styles';
import styled from '@emotion/styled';

const SuggestionsList = ({ activeSuggestionIndex, suggestions }) => {
  return (
    <LinkList>
      {suggestions.map((suggestion, index) => (
        <li key={suggestion.id}>
          <Link to={`/breed/${suggestion.name}`}>
            <LinkText isActive={activeSuggestionIndex === index}>{suggestion.name}</LinkText>
          </Link>
        </li>
      ))}
    </LinkList>
  );
};

SuggestionsList.propTypes = {
  suggestions: PropTypes.array,
  activeSuggestionIndex: PropTypes.number
};

export default SuggestionsList;

const LinkText = styled.span((props) => ({
  cursor: 'pointer',
  padding: '.9rem 1rem',
  display: 'block',
  color: colors.dark,
  backgroundColor: props.isActive ? 'rgba(151, 151, 151, 0.1)' : colors.light
}));

const LinkList = styled.ul({
  borderRadius: '24px',
  background: colors.light,
  padding: '1rem 1rem',
  width: '320px'
});
