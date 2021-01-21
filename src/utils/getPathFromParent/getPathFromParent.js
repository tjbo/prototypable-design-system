export default function getPathFromParent(page, pages, _path = []) {
  _path.push(page.path)
  const parent = pages.filter((_page) => _page.id === page.child_of.id)[0]

  if (parent && parent.child_of && parent.child_of.id) {
    return getPathFromParent(parent, pages, _path)
  }

  return '/' + _path.reverse().join('/') + '/'
}
