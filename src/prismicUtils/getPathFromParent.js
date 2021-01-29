export default function getPathFromParent(page, pages, _path = []) {
  const _page = page.node

  if (_page.path === '/') {
    return '/'
  }
  _path.push(_page.path)

  if (
    _page &&
    _page.child_of &&
    _page.child_of._meta &&
    _page.child_of._meta.id
  ) {
    const parent = pages.filter((_parent) => {
      return _parent.node._meta.id === _page.child_of._meta.id
    })[0]

    const _parent = parent.node

    if (
      _parent &&
      _parent.child_of &&
      _parent.child_of._meta &&
      _parent.child_of._meta.id
    ) {
      return getPathFromParent(parent, pages, _path)
    }
  }
  return `/${_path.reverse().join('/')}/`.replace(/\/\//g, '/')
}
