import styled from 'styled-components';
import GithubCorner from 'react-github-corner';

const StyledGithubCorner = styled(GithubCorner).attrs(({ theme }) => ({
  octoColor: theme.global.colors.text,
  bannerColor: theme.global.colors.brand,
}))``;

export default StyledGithubCorner;
