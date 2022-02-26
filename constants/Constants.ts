export module Constants {
  // these are common web constants

  export class WebConstants {
    protected SLASH = "/";
    protected WEB = "web";
    protected API = "api";
    protected CHECK_CONN = "check-connection";
    protected REGISTER = "register";
  }

  export class RoutingConstants extends WebConstants {
    private WEB_API = this.SLASH + this.WEB + this.SLASH + this.API;
    private WEB_API_CONNECTION = this.SLASH + this.CHECK_CONN;
    private WEB_API_REGISTER = this.SLASH + this.REGISTER;

    get WebAPI(): string {
      return this.WEB_API;
    }

    get WebApiConnection() {
      return this.WEB_API_CONNECTION;
    }

    get WebApiRegister() {
      return this.WEB_API_REGISTER;
    }
  }
}
