import html from 'yo-yo'

// https://css-tricks.com/creating-svg-icon-system-react/

export function defaultTabIcon () {
  return html`<svg class="UppyIcon UppyModalTab-icon" width="224" height="224" viewBox="0 0 224 224">
    <path d="M112 224c61.856 0 112-50.144 112-112S173.856 0 112 0 0 50.144 0 112s50.144 112 112 112zm0-12c55.228 0 100-44.772 100-100S167.228 12 112 12 12 56.772 12 112s44.772 100 100 100z"/>
    <path d="M147.67 132.24v57.43H77v-57.43H29.79l82.38-103.71 82.37 103.71h-46.87z" fill="#FFF"/>
  </svg>`
}

export function localIcon () {
  return html`<svg class="UppyIcon UppyModalTab-icon" width="27" height="25" viewBox="0 0 27 25">
    <path d="M5.586 9.288a.313.313 0 0 0 .282.176h4.84v3.922c0 1.514 1.25 2.24 2.792 2.24 1.54 0 2.79-.726 2.79-2.24V9.464h4.84c.122 0 .23-.068.284-.176a.304.304 0 0 0-.046-.324L13.735.106a.316.316 0 0 0-.472 0l-7.63 8.857a.302.302 0 0 0-.047.325z"/>
    <path d="M24.3 5.093c-.218-.76-.54-1.187-1.208-1.187h-4.856l1.018 1.18h3.948l2.043 11.038h-7.193v2.728H9.114v-2.725h-7.36l2.66-11.04h3.33l1.018-1.18H3.907c-.668 0-1.06.46-1.21 1.186L0 16.456v7.062C0 24.338.676 25 1.51 25h23.98c.833 0 1.51-.663 1.51-1.482v-7.062L24.3 5.093z"/>
  </svg>`
}

export function backIcon () {
  return html`<svg class="UppyIcon" width="7px" height="10px" viewBox="0 0 23 45">
    <polygon points="21.2678133 0.318896058 1.26781326 21.8188961 0.634228199 22.5 1.26781326 23.1811039 21.2678133 44.6811039 22.7321867 43.3188961 2.73218674 21.8188961 2.73218674 23.1811039 22.7321867 1.68110394"></polygon>
  </svg>`
}

export function closeIcon () {
  return html`<svg class="UppyIcon" width="14px" height="14px" viewBox="0 0 19 19">
    <polygon points="17.3182539 17.2324466 9.93955339 9.85374611 9.586 9.50019272 9.23244661 9.85374611 1.85374611 17.2324466 2.56085289 17.2324466 1.93955339 16.6111471 1.93955865 17.3182486 9.31803946 9.93954813 9.67158232 9.58599474 9.31803419 9.23244661 1.93955339 1.85396581 1.93961588 2.56101008 2.56091538 1.93949089 1.85375137 1.93955865 9.23245187 9.31803946 9.586 9.67157706 9.93954813 9.31803946 17.3182486 1.93955865 16.6111471 1.93955339 17.2324466 2.56085289 17.2324466 1.85374611 9.85374611 9.23244661 9.50019272 9.586 9.85374611 9.93955339 17.2324466 17.3182539 17.9395534 16.6111471 10.5608529 9.23244661 10.5608529 9.93955339 17.9395534 2.56085289 18.2931068 2.2072995 17.9395534 1.85374611 17.3182539 1.23244661 16.9647058 0.878898482 16.6111524 1.23244135 9.23245187 8.61092215 9.93954813 8.61092215 2.56084763 1.23244135 2.20723173 0.87883598 1.85368362 1.23250911 1.23238412 1.85402831 0.878955712 2.20758169 1.23244661 2.56107259 8.61092741 9.93955339 8.61092215 9.23245187 1.23244135 16.6111524 0.878898482 16.9647058 1.23244661 17.3182539 1.85374611 17.9395534 2.2072995 18.2931068 2.56085289 17.9395534 9.93955339 10.5608529 9.23244661 10.5608529 16.6111471 17.9395534"></polygon>
  </svg>`
}

export function pluginIcon () {
  return html`<svg class="UppyIcon" width="16px" height="16px" viewBox="0 0 32 30" class="UppyModalTab-icon">
      <path d="M6.6209894,11.1451162 C6.6823051,11.2751669 6.81374248,11.3572188 6.95463813,11.3572188 L12.6925482,11.3572188 L12.6925482,16.0630427 C12.6925482,17.880509 14.1726048,18.75 16.0000083,18.75 C17.8261072,18.75 19.3074684,17.8801847 19.3074684,16.0630427 L19.3074684,11.3572188 L25.0437478,11.3572188 C25.1875787,11.3572188 25.3164069,11.2751669 25.3790272,11.1451162 C25.4370814,11.0173358 25.4171865,10.8642587 25.3252129,10.7562615 L16.278212,0.127131837 C16.2093949,0.0463771751 16.1069846,0 15.9996822,0 C15.8910751,0 15.7886648,0.0463771751 15.718217,0.127131837 L6.6761083,10.7559371 C6.58250402,10.8642587 6.56293518,11.0173358 6.6209894,11.1451162 L6.6209894,11.1451162 Z"/>
      <path d="M28.8008722,6.11142645 C28.5417891,5.19831555 28.1583331,4.6875 27.3684848,4.6875 L21.6124454,4.6875 L22.8190234,6.10307874 L27.4986725,6.10307874 L29.9195817,19.3486449 L21.3943891,19.3502502 L21.3943891,22.622552 L10.8023461,22.622552 L10.8023461,19.3524977 L2.07815702,19.3534609 L5.22979699,6.10307874 L9.17871529,6.10307874 L10.3840011,4.6875 L4.6308691,4.6875 C3.83940559,4.6875 3.37421888,5.2390909 3.19815864,6.11142645 L0,19.7470874 L0,28.2212959 C0,29.2043992 0.801477937,30 1.78870751,30 L30.2096773,30 C31.198199,30 32,29.2043992 32,28.2212959 L32,19.7470874 L28.8008722,6.11142645 L28.8008722,6.11142645 Z"/>
    </svg>`
}

export function checkIcon () {
  return html`<svg class="UppyIcon" width="18px" height="18px" viewBox="0 0 18 18">
    <ellipse fill="#7AC824" cx="8" cy="8" rx="8" ry="8"/>
    <polygon fill="#FFFFFF" points="6.93333333 12 3.2 8.13104347 4.26659124 7.02575014 6.93333333 9.78917886 11.7189271 4.8 12.8 5.92030049 6.93333333 12"/>
  </svg>`
}

export function removeIcon () {
  return html`<svg aria-hidden="true" class="UppyIcon" width="16px" height="16px" viewBox="0 0 16 16">
    <path d="M8,16 C12.418278,16 16,12.418278 16,8 C16,3.581722 12.418278,0 8,0 C3.581722,0 0,3.581722 0,8 C0,12.418278 3.581722,16 8,16 L8,16 Z M8,15.04 C4.11191536,15.04 0.96,11.8880846 0.96,8 C0.96,4.11191536 4.11191536,0.96 8,0.96 C11.8880846,0.96 15.04,4.11191536 15.04,8 C15.04,11.8880846 11.8880846,15.04 8,15.04 L8,15.04 Z"/>
    <polygon points="11.7336473 11.0546647 4.94532725 4.26650475 4.26651275 4.94533525 11.0548327 11.7334953"/>
    <polygon points="4.94532725 11.7334953 11.7336473 4.94533525 11.0548327 4.26650475 4.26651275 11.0546647"/>
  </svg>`
}

export function uploadIcon () {
  return html`<svg class="UppyIcon" width="37" height="33" viewBox="0 0 37 33">
    <path d="M29.107 24.5c4.07 0 7.393-3.355 7.393-7.442 0-3.994-3.105-7.307-7.012-7.502l.468.415C29.02 4.52 24.34.5 18.886.5c-4.348 0-8.27 2.522-10.138 6.506l.446-.288C4.394 6.782.5 10.758.5 15.608c0 4.924 3.906 8.892 8.76 8.892h4.872c.635 0 1.095-.467 1.095-1.104 0-.636-.46-1.103-1.095-1.103H9.26c-3.644 0-6.63-3.035-6.63-6.744 0-3.71 2.926-6.685 6.57-6.685h.964l.14-.28.177-.362c1.477-3.4 4.744-5.576 8.347-5.576 4.58 0 8.45 3.452 9.01 8.072l.06.536.05.446h1.101c2.87 0 5.204 2.37 5.204 5.295s-2.333 5.296-5.204 5.296h-6.062c-.634 0-1.094.467-1.094 1.103 0 .637.46 1.104 1.094 1.104h6.12z"/>
    <path d="M23.196 18.92l-4.828-5.258-.366-.4-.368.398-4.828 5.196a1.13 1.13 0 0 0 0 1.546c.428.46 1.11.46 1.537 0l3.45-3.71-.868-.34v15.03c0 .64.445 1.118 1.075 1.118.63 0 1.075-.48 1.075-1.12V16.35l-.867.34 3.45 3.712a1 1 0 0 0 .767.345 1 1 0 0 0 .77-.345c.416-.33.416-1.036 0-1.485v.003z"/>
  </svg>`
}

export function fileIcon (fileType) {
  return html`<svg class="UppyIcon" width="90" height="90" viewBox="0 0 21 29">
    <path d="M2.473.31C1.44.31.59 1.21.59 2.307V26.31c0 1.097.85 2 1.883 2H18.71c1.03 0 1.88-.903 1.88-2V7.746a.525.525 0 0 0-.014-.108v-.015a.51.51 0 0 0-.014-.03v-.017a.51.51 0 0 0-.015-.03.482.482 0 0 0-.014-.016v-.015a.482.482 0 0 0-.015-.015.51.51 0 0 0-.014-.03.482.482 0 0 0-.014-.017.51.51 0 0 0-.015-.03.483.483 0 0 0-.03-.03L13.636.45a.47.47 0 0 0-.118-.093.448.448 0 0 0-.044-.015.448.448 0 0 0-.044-.016.448.448 0 0 0-.045-.015.44.44 0 0 0-.073 0H2.474zm0 .99h10.372v4.943c0 1.097.85 2 1.88 2h4.932V26.31c0 .56-.42 1.007-.948 1.007H2.472c-.527 0-.95-.446-.95-1.007V2.308c0-.56.423-1.008.95-1.008zm11.305.667l4.843 4.927.352.357h-4.246c-.527 0-.948-.446-.948-1.007V1.967z">
    <text font-family="ArialMT, Arial"
          font-size="5"
          font-weight="bold"
          text-anchor="middle"
          x="11"
          y="22">
      ${fileType.specific ? fileType.specific.toUpperCase() : '?'}
    </text>
  </svg>`
}

export function dashboardBgIcon () {
  return html`<svg class="UppyIcon" width="280" height="240" viewBox="0 0 280 240"><g fill="none" fill-rule="evenodd"><path d="M219.505 10.89c-3.398-1.585-7.486-.12-9.06 3.254l-34.427 73.83c-1.573 3.375-.072 7.456 3.326 9.04l53.414 24.908c3.388 1.58 7.48.107 9.053-3.268l26.628-57.1c.05-.114.085-.232.11-.354l.02-.046c0-.038 0-.076-.003-.114l.025-.052a1.69 1.69 0 0 0-.007-.115 1.675 1.675 0 0 0-.023-.07l.022-.047a1.698 1.698 0 0 0-.028-.07c0-.037 0-.075-.003-.113a1.665 1.665 0 0 0-.02-.074 1.69 1.69 0 0 0-.007-.116 1.7 1.7 0 0 0-.056-.14l-12.44-31.8a1.694 1.694 0 0 0-.255-.466c-.04-.04-.08-.078-.124-.114a1.7 1.7 0 0 0-.122-.117c-.04-.04-.082-.08-.126-.115a1.708 1.708 0 0 0-.24-.112l-35.653-16.625-.002-.005zm-1.42 3.045l34.12 15.91-7.09 15.205c-1.573 3.374-.072 7.456 3.316 9.036l16.226 7.565-25.914 55.573c-.803 1.723-2.826 2.453-4.563 1.643L180.764 93.96c-1.734-.81-2.485-2.83-1.68-4.556l34.426-73.827a3.422 3.422 0 0 1 4.572-1.643h.003zm36.233 19.394l8.865 22.583.645 1.638-13.967-6.513c-1.733-.808-2.478-2.826-1.674-4.55l6.135-13.157h-.002z" fill="#231F20"/><text font-family="PTSans-Bold, PT Sans" font-size="22.54" font-weight="bold" fill="#E02D79" transform="rotate(25 88.613 485.092)"><tspan x="14.445" y="70.225">MP3</tspan></text><path d="M7.952 35.956c-3.408 1.59-4.924 5.657-3.355 9.022l34.332 73.626c1.568 3.364 5.663 4.827 9.07 3.238l53.56-24.975c3.396-1.584 4.91-5.66 3.34-9.026L78.347 30.9a1.66 1.66 0 0 0-.2-.31l-.022-.047a1.673 1.673 0 0 0-.09-.07l-.023-.053a1.68 1.68 0 0 0-.093-.07 1.674 1.674 0 0 0-.07-.026l-.02-.046a1.698 1.698 0 0 0-.072-.023 1.673 1.673 0 0 0-.09-.07 1.663 1.663 0 0 0-.07-.03 1.68 1.68 0 0 0-.092-.07 1.702 1.702 0 0 0-.142-.046l-32.39-10.824a1.698 1.698 0 0 0-.523-.104c-.055.004-.11.012-.165.022-.057.003-.113.01-.168.018a1.718 1.718 0 0 0-.17.023c-.083.032-.164.07-.24.113l-35.75 16.67-.005-.002zm1.416 3.037L43.58 23.04l7.07 15.16c1.57 3.366 5.665 4.83 9.062 3.244l16.268-7.586 25.842 55.418c.8 1.718.055 3.735-1.687 4.547l-53.558 24.975c-1.738.81-3.77.093-4.574-1.628L7.673 43.548c-.8-1.718-.047-3.743 1.69-4.553l.005-.002zM47.612 23.65l23.022 7.664 1.67.554-14.004 6.53c-1.74.81-3.765.09-4.568-1.63l-6.117-13.12-.003.002z" fill="#231F20"/><text font-family="PTSans-Bold, PT Sans" font-size="22.477" font-weight="bold" fill="#E02D79" transform="rotate(-25 88.493 15.502)"><tspan x="16.986" y="70.453">PDF</tspan></text><g><path d="M111.598.002c-3.762 0-6.858 3.05-6.858 6.768v81.347c0 3.718 3.096 6.778 6.858 6.778h59.14c3.752 0 6.848-3.06 6.848-6.778V25.203a1.663 1.663 0 0 0-.05-.366v-.05a1.676 1.676 0 0 0-.052-.103v-.057a1.684 1.684 0 0 0-.054-.102 1.676 1.676 0 0 0-.05-.054v-.05a1.7 1.7 0 0 0-.056-.05 1.676 1.676 0 0 0-.05-.103 1.665 1.665 0 0 0-.052-.057 1.684 1.684 0 0 0-.054-.102 1.704 1.704 0 0 0-.11-.102l-24.8-23.53a1.7 1.7 0 0 0-.43-.315 1.717 1.717 0 0 0-.16-.05 1.713 1.713 0 0 0-.16-.054 1.718 1.718 0 0 0-.165-.05 1.722 1.722 0 0 0-.265 0h-39.476L111.598 0zm0 3.355h37.78V20.11c0 3.717 3.095 6.777 6.846 6.777h17.964v61.23c0 1.898-1.53 3.413-3.453 3.413h-59.14c-1.92 0-3.46-1.512-3.46-3.413V6.773c0-1.898 1.54-3.416 3.46-3.416h.003zm41.177 2.26l17.64 16.698 1.282 1.21H156.23c-1.918 0-3.45-1.51-3.45-3.413V5.617h-.005z" fill="#231F20"/><text font-family="PTSans-Bold, PT Sans" font-size="22.508" font-weight="bold" fill="#E02D79" transform="translate(104.74)"><tspan x="19.574" y="70.341">JPG</tspan></text></g><g><g fill="#E02D79"><path d="M115.432 194.18h50.04v45.698h-50.04z"/><path d="M82 199.29L140.334 126l58.334 73.29z"/></g><path d="M108 214.498s5.284 2.323 5.284 6.018c0 5.422 17.384-5.76 17.384-5.76l1.332-15.23-11.732-14.202L110.4 183l-2.4 31.498z" fill="#FFF"/><path d="M180 181.73c0-9.938-3.172-9.823-3.172-9.823s.682-5.31-1.816-5.31c-2.5 0-3.61.565-4.878.565-1.507 0-2.724.115-2.724.115s-3.628-7.567-7.138-7.567c-2.054 0-1.134-6.71-7.26-6.71-4.76 0-5.445.62-9.517.62-4.073 0-9.517.34-12.936.34-5.128 0-17.77 11.327-24.118 19.85-.654 3.2-1.4 8.22-1.4 17.678 0 2.483-2.042 12.197-2.042 15.02 0 2.82 3.593 11.256 8.248 11.256 2.835 0 4.31-1.693 4.31-3.05 0-1.36-.682-5.65-.682-7.682 0-3.015 5.615-22.585 5.615-23.04 0 0-.728 6.585-.728 13.7 0 7.295 9.95 10.02 10.655 10.02 0 0-12.24.038-12.24-7.532 0 0-.91 4.736-.91 7.68 0 2.946.794 5.985.794 7.453 0 1.95-2.248 4.634-5.293 5.13.773 14.262 15.71 15.557 18.114 15.557 2.467 0 14.89-2.258 14.89-6.663v-.643s-.265-4.342-.265-5.826c0 0 3.232 1.3 5.948 1.3s14.823-3.814 14.823-14.207c0 0 1.927.226 3.065.226 1.14 0 1.817-.225 1.817-1.354 0-1.13-4.758-9.714-4.758-12.63.004-1.834.23-3.66.67-5.44 0 0 12.93.904 12.93-9.03z" fill="#231F20"/><path d="M162.273 201.9c2.896 0 2.725 2.544 2.725 5.087 0 2.544-.282 14.013-13.734 14.013-3.062 0-7.335-2.488-7.263-4.858.116-3.843 7.38-1.975 7.38-9.605 0 0 .793-3.503-2.27-3.503-3.062 0 .738-2.034 5.336-2.034 2.555 0 3.404 1.13 3.404 5.877 0 5.762-3.103 7.756-2.337 7.875.583.09 5.157-1.998 5.157-6.746.016-3.846-.666-6.106 1.603-6.106z" fill="#FFF"/><path d="M120.763 184s7.346-6.766 11.11-6.766c1.026 0 4.1-.34 5.972-.34 3.078 0 10.082-2.45 10.082-4.057a11.536 11.536 0 0 1 6.666-2.2c3.336 0 6.323 1.692 6.323.17 0-.677.342-2.537 3.078-2.537 2.735 0 1.88-2.03 1.88-2.03s-3.585-5.24-6.324-5.24c-2.74 0-4.778 2.364-7.86 2.364-9.226 0-6.666-1.86-16.405-1.86-2.39 0-9.74 6.766-10.082 9.13 0 0-8.203 3.212-8.203 5.91l2.75 4.58 1.013 2.876z" fill="#E02D79"/><path d="M133 171s2.41-2.37 4.484-2.37a13.62 13.62 0 0 1 5.516 1.33s-1.205-2.96-5.516-2.96c-4.31 0-4.484 4-4.484 4zM158 168s.835-1.42 2.33-1.42c.975.037 1.91.37 2.67.95 0 0-1.002-2.53-2.836-2.53-1.834 0-2.164 3-2.164 3z" fill="#231F20"/><path d="M162 172.234c0 2.282 4.89 5.766 8.89 5.766 4 0 5.11-6.086 5.11-7.607 0-1.522-.89-2.393-2-2.393-1.11 0-3.666.898-4.777.87-4.225-.136-7.223.19-7.223 3.364zM170.77 185s-1.783 4.777-8.126 4.777-8.46-1.11-11.025-1.11c-2.565 0-6.013 1.552-7.348 1.552s-2.226-.777-3.113-.777c-.89 0 2.116 11.557 4.785 11.557 0 0 2.56-2.22 9.243-2.22 2.782 0 3.565 1.552 3.565 1.552.946-.27 1.915-.457 2.895-.555 1.335 0-.89-2.222-.89-4 0-1.78 4.007-5.558 6.46-5.558 1.78 0 7.782-.89 7.782-2.447s-4.23-.552-4.23-2.773z" fill="#FFF"/></g></g></svg>`
}
