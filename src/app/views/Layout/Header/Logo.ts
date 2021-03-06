import styled from "styled-components";

import AppIcon from "app/components/AppIcon";

const Logo = styled(AppIcon)`
  padding: ${({ theme }) => theme.global.edgeSize.small};
  width: ${({ theme }) => theme.icon.size.medium};
  height: ${({ theme }) => theme.icon.size.medium};
  fill: ${({ theme }) => theme.global.colors.brand};
`;

export default Logo;
