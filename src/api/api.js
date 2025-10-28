const API_URL = "http://localhost:8080/";

export async function fetchAPI(endpoint, options = {}) {
  try {
    const response = await fetch(API_URL + endpoint, options);

    let data;
    data = await response.json();

    const errorMap = {
      400: ValidationError,
      401: AuthenticationError,
      403: AuthenticationError,
      404: NotFoundError,
      409: ValidationError,
    };

    if (!response.ok) {
      console.log(data);
      const ErrorClass = errorMap[response.status];
      if (ErrorClass) {
        if (ErrorClass === NotFoundError) {
          throw new NotFoundError("Not found resources");
        }
        if (ErrorClass === AuthenticationError) {
          throw new AuthenticationError();
        }
        throw new ErrorClass(data.detail || "Error", data.status);
      }
      if (response.status >= 500) {
        throw new ServerError("Server error");
      }
      throw new ApiError(`Unknown error: ${response.status}`);
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new ConnectionError();
    }
    throw error;
  }
}

export async function registerUser(registerRequest) {
  return await fetchAPI("api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerRequest),
  });
}

export async function loginUser(loginRequest) {
  return await fetchAPI("api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginRequest),
  });
}

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
export class NotFoundError extends ApiError {
  constructor(message = "Not found resource", status = 404) {
    super(message);
    this.status = status;
  }
}
export class ConnectionError extends ApiError {
  constructor(message = "Cannot establish a connection", status = 0) {
    super(message);
    this.status = status;
  }
}
export class BadRequest extends ApiError {}
export class AuthenticationError extends ApiError {
  constructor(message = "Invalid email or password!", status = 403) {
    super(message);
    this.status = status;
  }
}
export class ValidationError extends ApiError {}
export class ServerError extends ApiError {}
