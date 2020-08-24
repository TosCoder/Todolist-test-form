export const formController = () => {
    return {
      getData: () => {
        return localStorage.getItem('data')
      },
      setData: (data) => {
        return localStorage.setItem('data',JSON.stringify(data))
      }
    }
  }
  