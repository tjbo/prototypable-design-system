export { default as Body } from './components/body'
export { default as Button } from './components/button'
export { default as BreadCrumb } from './components/breadCrumb'
export { default as Cards } from './components/cards/'
export { default as Content } from './components/content'
export { default as Faq } from './components/faq/faq'
export { default as Footer } from './components/footer/footer'
export { default as Header } from './components/header'
export { default as Icon } from './components/icon'
export { default as Jumbotron } from './components/jumbotron'
export { default as LoadingScreen } from './components/loadingScreen'
export { default as Modal } from './components/modal'
export { default as Posts } from './components/posts'
export { default as Section } from './components/section'
export { default as ScrollToTop } from './components/scrollToTop'
export { PrototypableProvider } from './components/prototypableContext'

// we use this library for building forms
export { Form, Formik, Field } from 'formik'

// Prototypable is build atop charka ui component library, we use these for basic things,
// and to assemble bigger more complext things things, but since we aren't changing these things
// we can export them for general use
export {
  Alert,
  AlertIcon,
  Box,
  ButtonGroup,
  // Breadcrumb, used by crumb
  // BreadcrumbItem,
  // BreadcrumbLink,
  // BreadcrumbSeparator,
  // Button, see button above, we need to include a way to use our router
  // ChakraProvider we use this in prototypable provider
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  IconButton,
  InputRightElement,
  InputGroup,
  Image,
  Link,
  ListIcon,
  List,
  ListItem,
  // Heading, for now we will use h1, h2, h3, as they are built into prismic
  Textarea,
  Input,
  FormHelperText,
  PseudoBox,
  Progress,
  Radio,
  RadioGroup,
  SimpleGrid,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Spinner,
  Switch,
} from '@chakra-ui/react'

// these are prismic utils for building static content
export { default as prismicUtils } from './prismicUtils'

// general util functions
import useScript from './utils/useScript'

// this needs to be exported like this, otherwise weird transpile errors from rollup
export const utils = {
  useScript,
}
