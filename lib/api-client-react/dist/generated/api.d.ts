import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { AuthResponse, CreateInternshipBody, DashboardStats, ErrorResponse, HealthStatus, Internship, ListInternshipsParams, LoginBody, MessageResponse, RegisterBody, UpdateInternshipBody, User } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * Returns server health status
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Register a new user
 */
export declare const getRegisterUrl: () => string;
export declare const register: (registerBody: RegisterBody, options?: RequestInit) => Promise<AuthResponse>;
export declare const getRegisterMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
        data: BodyType<RegisterBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
    data: BodyType<RegisterBody>;
}, TContext>;
export type RegisterMutationResult = NonNullable<Awaited<ReturnType<typeof register>>>;
export type RegisterMutationBody = BodyType<RegisterBody>;
export type RegisterMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Register a new user
 */
export declare const useRegister: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
        data: BodyType<RegisterBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof register>>, TError, {
    data: BodyType<RegisterBody>;
}, TContext>;
/**
 * @summary Login
 */
export declare const getLoginUrl: () => string;
export declare const login: (loginBody: LoginBody, options?: RequestInit) => Promise<AuthResponse>;
export declare const getLoginMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginBody>;
}, TContext>;
export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>;
export type LoginMutationBody = BodyType<LoginBody>;
export type LoginMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Login
 */
export declare const useLogin: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginBody>;
}, TContext>;
/**
 * @summary Logout
 */
export declare const getLogoutUrl: () => string;
export declare const logout: (options?: RequestInit) => Promise<MessageResponse>;
export declare const getLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export type LogoutMutationResult = NonNullable<Awaited<ReturnType<typeof logout>>>;
export type LogoutMutationError = ErrorType<unknown>;
/**
 * @summary Logout
 */
export declare const useLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
/**
 * @summary Get current user
 */
export declare const getGetMeUrl: () => string;
export declare const getMe: (options?: RequestInit) => Promise<User>;
export declare const getGetMeQueryKey: () => readonly ["/api/auth/me"];
export declare const getGetMeQueryOptions: <TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>;
export type GetMeQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get current user
 */
export declare function useGetMe<TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all internships for the current user
 */
export declare const getListInternshipsUrl: (params?: ListInternshipsParams) => string;
export declare const listInternships: (params?: ListInternshipsParams, options?: RequestInit) => Promise<Internship[]>;
export declare const getListInternshipsQueryKey: (params?: ListInternshipsParams) => readonly ["/api/internships", ...ListInternshipsParams[]];
export declare const getListInternshipsQueryOptions: <TData = Awaited<ReturnType<typeof listInternships>>, TError = ErrorType<unknown>>(params?: ListInternshipsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listInternships>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listInternships>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListInternshipsQueryResult = NonNullable<Awaited<ReturnType<typeof listInternships>>>;
export type ListInternshipsQueryError = ErrorType<unknown>;
/**
 * @summary List all internships for the current user
 */
export declare function useListInternships<TData = Awaited<ReturnType<typeof listInternships>>, TError = ErrorType<unknown>>(params?: ListInternshipsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listInternships>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new internship
 */
export declare const getCreateInternshipUrl: () => string;
export declare const createInternship: (createInternshipBody: CreateInternshipBody, options?: RequestInit) => Promise<Internship>;
export declare const getCreateInternshipMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createInternship>>, TError, {
        data: BodyType<CreateInternshipBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createInternship>>, TError, {
    data: BodyType<CreateInternshipBody>;
}, TContext>;
export type CreateInternshipMutationResult = NonNullable<Awaited<ReturnType<typeof createInternship>>>;
export type CreateInternshipMutationBody = BodyType<CreateInternshipBody>;
export type CreateInternshipMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Create a new internship
 */
export declare const useCreateInternship: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createInternship>>, TError, {
        data: BodyType<CreateInternshipBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createInternship>>, TError, {
    data: BodyType<CreateInternshipBody>;
}, TContext>;
/**
 * @summary Get a single internship
 */
export declare const getGetInternshipUrl: (id: number) => string;
export declare const getInternship: (id: number, options?: RequestInit) => Promise<Internship>;
export declare const getGetInternshipQueryKey: (id: number) => readonly [`/api/internships/${number}`];
export declare const getGetInternshipQueryOptions: <TData = Awaited<ReturnType<typeof getInternship>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getInternship>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getInternship>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetInternshipQueryResult = NonNullable<Awaited<ReturnType<typeof getInternship>>>;
export type GetInternshipQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a single internship
 */
export declare function useGetInternship<TData = Awaited<ReturnType<typeof getInternship>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getInternship>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update an internship
 */
export declare const getUpdateInternshipUrl: (id: number) => string;
export declare const updateInternship: (id: number, updateInternshipBody: UpdateInternshipBody, options?: RequestInit) => Promise<Internship>;
export declare const getUpdateInternshipMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateInternship>>, TError, {
        id: number;
        data: BodyType<UpdateInternshipBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateInternship>>, TError, {
    id: number;
    data: BodyType<UpdateInternshipBody>;
}, TContext>;
export type UpdateInternshipMutationResult = NonNullable<Awaited<ReturnType<typeof updateInternship>>>;
export type UpdateInternshipMutationBody = BodyType<UpdateInternshipBody>;
export type UpdateInternshipMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Update an internship
 */
export declare const useUpdateInternship: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateInternship>>, TError, {
        id: number;
        data: BodyType<UpdateInternshipBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateInternship>>, TError, {
    id: number;
    data: BodyType<UpdateInternshipBody>;
}, TContext>;
/**
 * @summary Delete an internship
 */
export declare const getDeleteInternshipUrl: (id: number) => string;
export declare const deleteInternship: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteInternshipMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteInternship>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteInternship>>, TError, {
    id: number;
}, TContext>;
export type DeleteInternshipMutationResult = NonNullable<Awaited<ReturnType<typeof deleteInternship>>>;
export type DeleteInternshipMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Delete an internship
 */
export declare const useDeleteInternship: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteInternship>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteInternship>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Get dashboard statistics
 */
export declare const getGetDashboardStatsUrl: () => string;
export declare const getDashboardStats: (options?: RequestInit) => Promise<DashboardStats>;
export declare const getGetDashboardStatsQueryKey: () => readonly ["/api/dashboard/stats"];
export declare const getGetDashboardStatsQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardStats>>>;
export type GetDashboardStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get dashboard statistics
 */
export declare function useGetDashboardStats<TData = Awaited<ReturnType<typeof getDashboardStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get internships with upcoming deadlines (next 7 days)
 */
export declare const getGetUpcomingDeadlinesUrl: () => string;
export declare const getUpcomingDeadlines: (options?: RequestInit) => Promise<Internship[]>;
export declare const getGetUpcomingDeadlinesQueryKey: () => readonly ["/api/internships/upcoming-deadlines"];
export declare const getGetUpcomingDeadlinesQueryOptions: <TData = Awaited<ReturnType<typeof getUpcomingDeadlines>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUpcomingDeadlines>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getUpcomingDeadlines>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetUpcomingDeadlinesQueryResult = NonNullable<Awaited<ReturnType<typeof getUpcomingDeadlines>>>;
export type GetUpcomingDeadlinesQueryError = ErrorType<unknown>;
/**
 * @summary Get internships with upcoming deadlines (next 7 days)
 */
export declare function useGetUpcomingDeadlines<TData = Awaited<ReturnType<typeof getUpcomingDeadlines>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUpcomingDeadlines>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map