import "./main.css";
import ToolboxIcon from "./svg/toolbox.svg";
import { debounce } from "debounce";

export default class TikTokEmbed {
  /**
   *
   * Get toolbox settings
   *
   * @return {{icon: string, title: string}}
   *
   */
  static get toolbox() {
    return {
      title: "TikTok",
      icon: ToolboxIcon,
    };
  }

  /**
   *
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {data: DelimiterData} — previously saved data
   *
   */
  constructor({ data, api, readOnly }) {
    this.api = api;
    this.data = data;
    this.readOnly = readOnly;
    this.element = null;
    this.wrapper = null;
    this.source = null;
    this.embed = null;
    this.caption = "";
    this.isEdited = false;
  }

  get CSS() {
    return {
      caption: "embed-tool__caption",
    };
  }

  /**
   *
   * Return tool's view
   *
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    const container = document.createElement("div");
    const input = document.createElement("input");
    input.value = this.data && this.data.url ? this.data.url : "";
    this.source = input.value;
    input.placeholder = "Вставьте сюда url с TikTok ...";

    container.classList.add("block-wrapper");
    container.appendChild(input);
    this._createIframe(input.value);

    input.addEventListener("change", (event) => {
      this.isEdited = true;

      this.source = input.value;
      this._createIframe(input.value);
    });

    const embedIsReady = this.embedIsReady(container);
    embedIsReady.then(() => {});
    this.wrapper = container;
    return container;
  }

  /**
   *
   * Create iframe for TikTok embed
   * @private
   * @param {string} url
   *
   */
  _createIframe(url) {
    const id = (ids) => ids[2];
    const regex =
      /https?:\/\/www.tiktok.com\/([^\/\?\&]*)\/([^\/\?\&]*)?\/video\/([^\/\?\&]*)/;
    const videoId = regex.exec(url);

    if (!videoId) {
      if (this.isEdited) {
        this.wrapper.querySelector("input").classList.add("invalid");
      }
      return;
    }

    const embedUrl = `https://www.tiktok.com/embed/v2/${id(videoId)}`;
    const html = `<iframe  frameborder="0" scrolling="no" allowtransparency="true" ></iframe>`;

    this.wrapper.innerHTML = null;
    const plyrContainer = document.createElement("div");
    const template = document.createElement("template");
    plyrContainer.classList.add("tiktok-wrapper");

    this.embed = embedUrl;

    template.innerHTML = html;
    template.content.firstChild.setAttribute("src", this.embed);

    plyrContainer.appendChild(template.content.firstChild);

    const caption = document.createElement("div");
    caption.classList.add("cdx-input", this.CSS.caption);
    caption.contentEditable = true;
    caption.dataset.placeholder = "Введите описание";
    this.wrapper.appendChild(plyrContainer);
    this.wrapper.appendChild(caption);
  }

  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @return {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Return block data
   *
   * @public
   * @param {HTMLDivElement} blockContent - Block wrapper
   * @returns {object}
   */
  save(blockContent) {
    const caption = blockContent.querySelector(`.${this.CSS.caption}`);

    return {
      service: "TikTok",
      embed: this.embed,
      source: this.source,
      caption: caption ? caption.innerHTML : "",
    };
  }
  async embedIsReady(targetNode) {
    const PRELOADER_DELAY = 450;

    let observer = null;

    await new Promise((resolve, reject) => {
      observer = new MutationObserver(debounce(resolve, PRELOADER_DELAY));
      observer.observe(targetNode, {
        childList: true,
        subtree: true,
      });
    });
    observer.disconnect();
  }
}
