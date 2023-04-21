import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { logger } from './Logger.js'

export default class Pop {
  /**
 *
 * @param {string} title The title text.
 * @param {string} text The body text.
 * @param {string} confirmButtonText The text of your confirm button.
 * @param {'success' | 'error' | 'info' | 'warning' | 'question'} icon Pop icon
 *
 * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
 */
  static async confirm(title = 'Are you sure?', text = "You won't be able to revert this!", confirmButtonText = 'Yes', icon = 'warning') {
    try {
      const res = await Swal.fire({
        title,
        text,
        icon,
        confirmButtonText,
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonColor: 'var(--bs-primary)',
        cancelButtonColor: 'var(--bs-secondary)'
      })
      if (res.isConfirmed) {
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }

  /**
 *
 * @param {string} title The title text
 * @param {'success' | 'error' | 'info' | 'warning' | 'question'} icon
 * @param {'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end'} position
 * @param {number} timer Time in milliseconds.
 * @param {boolean} progressBar Show progress bar or not respectively.
 * -----------------------------------
 * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
 */
  static toast(title = 'Warning!', icon = 'warning', position = 'top-end', timer = 3000, progressBar = true) {
    Swal.fire({
      title,
      icon,
      position,
      timer,
      timerProgressBar: progressBar,
      toast: true,
      showConfirmButton: false
    })
  }

  // static spotify(title = 'Warning') {
  //   Swal.fire({
  //     title,
  //     text: "Oops! It looks like the Spotify API and I aren't on the best terms at the moment, so unfortunately you won't be able to add these songs to your playlist. But thank you for visiting my site and interacting with it! I'm using this project to showcase my React skills, and I hope you've enjoyed your time here nonetheless. 😊",
  //     imageUrl: 'https://images.unsplash.com/photo-1535696588143-945e1379f1b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  //     imageWidth: 400,
  //     imageHeight: 300,
  //     imageAlt: 'Custom image',
  //   })
  // }

  /**
   * @param {import('axios').AxiosError | Error | String } error An Error Object.
   * @param { String } eventTrigger Queryable trigger
   */
  static error(error, eventTrigger = '') {
    logger.error(eventTrigger, error)

    // @ts-ignore
    if (error.isAxiosError) {
      // @ts-ignore
      const { response } = error
      const errorObj = (response.data ? response.data.error : response.data) || { message: 'Invalid Request ' + response.status }
      if (!errorObj) {
        // @ts-ignore
        return this.toast(error.message)
      }
      this.toast(errorObj.message || errorObj.error || 'error')
    } else {
      // @ts-ignore
      this.toast(error.message || error, 'error')
    }
  }

  /**
   * @param { string } message The message to display. If not provided, will display a generic message.
   */
  static success(message = 'Success!') {
    this.toast(message, 'success')
  }


}