export const FormWrapper = styled('div')`
  form {
    padding: ${({ theme }) => theme.unit(0.5)};
    /* border: ${({ theme }) => theme.border}; */
    background-color: ${({ theme }) => theme.colors.light2};
  }

  label {
    display: block;
  }
`
