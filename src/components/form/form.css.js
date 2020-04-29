export const FormWrapper = styled('div')`
  form {
    padding: ${({ theme }) => theme.unit(0.5)};
    border: ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.colors.light2};
  }

  input,
  textarea {
    width: 100%;
    min-width: 300px;
    border: none;
    height: ${({ theme }) => theme.unit(1)};
    display: block;
    margin-bottom: ${({ theme }) => theme.unit(0.5)};
  }

  textarea {
    height: ${({ theme }) => theme.unit(3)};
    resize: none;
  }

  label {
    display: block;
  }
`
