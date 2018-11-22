import api from '../infra/api-config'

export function createPostit(postit) {
  const url = '/todo'
  const data = {
    title: postit.title,
    desc: postit.text
  }

  return api().post(url, data)
}

export function getPostitsApi() {
  const url = '/todo'

  return api().get(url)
}

export function deletePostit(idPostit) {
  const url = `/todo/${idPostit}`

  return api().delete(url)
}

export function editPostit(postit, idPostit) { 
  const url = `/todo/${idPostit}`
  const data = {
    title: postit.title,
    desc: postit.text
  }
  return api().put(url, data)
 }