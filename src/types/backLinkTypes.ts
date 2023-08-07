export interface BackLinkProps {
    to: {
      pathname: string;
      search: string;
      hash: string;
      state: any | null;
      key: string;
    };
    children?: React.ReactNode;
  }