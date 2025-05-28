
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model clientes
 * 
 */
export type clientes = $Result.DefaultSelection<Prisma.$clientesPayload>
/**
 * Model cuotas
 * 
 */
export type cuotas = $Result.DefaultSelection<Prisma.$cuotasPayload>
/**
 * Model logactividad
 * 
 */
export type logactividad = $Result.DefaultSelection<Prisma.$logactividadPayload>
/**
 * Model movimientoscaja
 * 
 */
export type movimientoscaja = $Result.DefaultSelection<Prisma.$movimientoscajaPayload>
/**
 * Model pagos
 * 
 */
export type pagos = $Result.DefaultSelection<Prisma.$pagosPayload>
/**
 * Model prestamos
 * 
 */
export type prestamos = $Result.DefaultSelection<Prisma.$prestamosPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model datos_prestamos
 * 
 */
export type datos_prestamos = $Result.DefaultSelection<Prisma.$datos_prestamosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const estado_cuota: {
  pendiente: 'pendiente',
  pagada: 'pagada',
  atrasada: 'atrasada',
  parcial: 'parcial'
};

export type estado_cuota = (typeof estado_cuota)[keyof typeof estado_cuota]


export const estado_pago: {
  parcial: 'parcial',
  completo: 'completo'
};

export type estado_pago = (typeof estado_pago)[keyof typeof estado_pago]


export const estado_prestamo: {
  activo: 'activo',
  finalizado: 'finalizado',
  mora: 'mora'
};

export type estado_prestamo = (typeof estado_prestamo)[keyof typeof estado_prestamo]


export const estado_usuario: {
  activo: 'activo',
  inactivo: 'inactivo'
};

export type estado_usuario = (typeof estado_usuario)[keyof typeof estado_usuario]


export const forma_pago: {
  efectivo: 'efectivo',
  transferencia: 'transferencia',
  otro: 'otro'
};

export type forma_pago = (typeof forma_pago)[keyof typeof forma_pago]


export const frecuencia_pago: {
  diario: 'diario',
  semanal: 'semanal',
  quincenal: 'quincenal',
  mensual: 'mensual'
};

export type frecuencia_pago = (typeof frecuencia_pago)[keyof typeof frecuencia_pago]


export const referencia_tipo: {
  prestamo: 'prestamo',
  pago: 'pago',
  otro: 'otro'
};

export type referencia_tipo = (typeof referencia_tipo)[keyof typeof referencia_tipo]


export const rol: {
  admin: 'admin',
  cobrador: 'cobrador',
  secretario: 'secretario'
};

export type rol = (typeof rol)[keyof typeof rol]


export const tipo_interes: {
  simple: 'simple',
  compuesto: 'compuesto'
};

export type tipo_interes = (typeof tipo_interes)[keyof typeof tipo_interes]


export const tipo_movimiento: {
  entrada: 'entrada',
  salida: 'salida'
};

export type tipo_movimiento = (typeof tipo_movimiento)[keyof typeof tipo_movimiento]

}

export type estado_cuota = $Enums.estado_cuota

export const estado_cuota: typeof $Enums.estado_cuota

export type estado_pago = $Enums.estado_pago

export const estado_pago: typeof $Enums.estado_pago

export type estado_prestamo = $Enums.estado_prestamo

export const estado_prestamo: typeof $Enums.estado_prestamo

export type estado_usuario = $Enums.estado_usuario

export const estado_usuario: typeof $Enums.estado_usuario

export type forma_pago = $Enums.forma_pago

export const forma_pago: typeof $Enums.forma_pago

export type frecuencia_pago = $Enums.frecuencia_pago

export const frecuencia_pago: typeof $Enums.frecuencia_pago

export type referencia_tipo = $Enums.referencia_tipo

export const referencia_tipo: typeof $Enums.referencia_tipo

export type rol = $Enums.rol

export const rol: typeof $Enums.rol

export type tipo_interes = $Enums.tipo_interes

export const tipo_interes: typeof $Enums.tipo_interes

export type tipo_movimiento = $Enums.tipo_movimiento

export const tipo_movimiento: typeof $Enums.tipo_movimiento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.clientes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.clientes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.clientes`: Exposes CRUD operations for the **clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.clientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cuotas`: Exposes CRUD operations for the **cuotas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuotas
    * const cuotas = await prisma.cuotas.findMany()
    * ```
    */
  get cuotas(): Prisma.cuotasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logactividad`: Exposes CRUD operations for the **logactividad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logactividads
    * const logactividads = await prisma.logactividad.findMany()
    * ```
    */
  get logactividad(): Prisma.logactividadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimientoscaja`: Exposes CRUD operations for the **movimientoscaja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movimientoscajas
    * const movimientoscajas = await prisma.movimientoscaja.findMany()
    * ```
    */
  get movimientoscaja(): Prisma.movimientoscajaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagos`: Exposes CRUD operations for the **pagos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pagos.findMany()
    * ```
    */
  get pagos(): Prisma.pagosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prestamos`: Exposes CRUD operations for the **prestamos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prestamos
    * const prestamos = await prisma.prestamos.findMany()
    * ```
    */
  get prestamos(): Prisma.prestamosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.datos_prestamos`: Exposes CRUD operations for the **datos_prestamos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datos_prestamos
    * const datos_prestamos = await prisma.datos_prestamos.findMany()
    * ```
    */
  get datos_prestamos(): Prisma.datos_prestamosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    clientes: 'clientes',
    cuotas: 'cuotas',
    logactividad: 'logactividad',
    movimientoscaja: 'movimientoscaja',
    pagos: 'pagos',
    prestamos: 'prestamos',
    usuarios: 'usuarios',
    datos_prestamos: 'datos_prestamos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "clientes" | "cuotas" | "logactividad" | "movimientoscaja" | "pagos" | "prestamos" | "usuarios" | "datos_prestamos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      clientes: {
        payload: Prisma.$clientesPayload<ExtArgs>
        fields: Prisma.clientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findFirst: {
            args: Prisma.clientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          findMany: {
            args: Prisma.clientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>[]
          }
          create: {
            args: Prisma.clientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          createMany: {
            args: Prisma.clientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>[]
          }
          delete: {
            args: Prisma.clientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          update: {
            args: Prisma.clientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          deleteMany: {
            args: Prisma.clientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>[]
          }
          upsert: {
            args: Prisma.clientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.clientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientesCountArgs<ExtArgs>
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      cuotas: {
        payload: Prisma.$cuotasPayload<ExtArgs>
        fields: Prisma.cuotasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cuotasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cuotasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>
          }
          findFirst: {
            args: Prisma.cuotasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cuotasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>
          }
          findMany: {
            args: Prisma.cuotasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>[]
          }
          create: {
            args: Prisma.cuotasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>
          }
          createMany: {
            args: Prisma.cuotasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cuotasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>[]
          }
          delete: {
            args: Prisma.cuotasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>
          }
          update: {
            args: Prisma.cuotasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>
          }
          deleteMany: {
            args: Prisma.cuotasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cuotasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cuotasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>[]
          }
          upsert: {
            args: Prisma.cuotasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cuotasPayload>
          }
          aggregate: {
            args: Prisma.CuotasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuotas>
          }
          groupBy: {
            args: Prisma.cuotasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuotasGroupByOutputType>[]
          }
          count: {
            args: Prisma.cuotasCountArgs<ExtArgs>
            result: $Utils.Optional<CuotasCountAggregateOutputType> | number
          }
        }
      }
      logactividad: {
        payload: Prisma.$logactividadPayload<ExtArgs>
        fields: Prisma.logactividadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logactividadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logactividadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logactividadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logactividadPayload>
          }
          findFirst: {
            args: Prisma.logactividadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logactividadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logactividadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logactividadPayload>
          }
          findMany: {
            args: Prisma.logactividadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logactividadPayload>[]
          }
          create: {
            args: Prisma.logactividadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logactividadPayload>
          }
          createMany: {
            args: Prisma.logactividadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.logactividadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logactividadPayload>[]
          }
          delete: {
            args: Prisma.logactividadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logactividadPayload>
          }
          update: {
            args: Prisma.logactividadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logactividadPayload>
          }
          deleteMany: {
            args: Prisma.logactividadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logactividadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.logactividadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logactividadPayload>[]
          }
          upsert: {
            args: Prisma.logactividadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logactividadPayload>
          }
          aggregate: {
            args: Prisma.LogactividadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogactividad>
          }
          groupBy: {
            args: Prisma.logactividadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogactividadGroupByOutputType>[]
          }
          count: {
            args: Prisma.logactividadCountArgs<ExtArgs>
            result: $Utils.Optional<LogactividadCountAggregateOutputType> | number
          }
        }
      }
      movimientoscaja: {
        payload: Prisma.$movimientoscajaPayload<ExtArgs>
        fields: Prisma.movimientoscajaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.movimientoscajaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoscajaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.movimientoscajaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoscajaPayload>
          }
          findFirst: {
            args: Prisma.movimientoscajaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoscajaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.movimientoscajaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoscajaPayload>
          }
          findMany: {
            args: Prisma.movimientoscajaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoscajaPayload>[]
          }
          create: {
            args: Prisma.movimientoscajaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoscajaPayload>
          }
          createMany: {
            args: Prisma.movimientoscajaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.movimientoscajaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoscajaPayload>[]
          }
          delete: {
            args: Prisma.movimientoscajaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoscajaPayload>
          }
          update: {
            args: Prisma.movimientoscajaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoscajaPayload>
          }
          deleteMany: {
            args: Prisma.movimientoscajaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.movimientoscajaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.movimientoscajaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoscajaPayload>[]
          }
          upsert: {
            args: Prisma.movimientoscajaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$movimientoscajaPayload>
          }
          aggregate: {
            args: Prisma.MovimientoscajaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimientoscaja>
          }
          groupBy: {
            args: Prisma.movimientoscajaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimientoscajaGroupByOutputType>[]
          }
          count: {
            args: Prisma.movimientoscajaCountArgs<ExtArgs>
            result: $Utils.Optional<MovimientoscajaCountAggregateOutputType> | number
          }
        }
      }
      pagos: {
        payload: Prisma.$pagosPayload<ExtArgs>
        fields: Prisma.pagosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          findFirst: {
            args: Prisma.pagosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          findMany: {
            args: Prisma.pagosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>[]
          }
          create: {
            args: Prisma.pagosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          createMany: {
            args: Prisma.pagosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pagosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>[]
          }
          delete: {
            args: Prisma.pagosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          update: {
            args: Prisma.pagosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          deleteMany: {
            args: Prisma.pagosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pagosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>[]
          }
          upsert: {
            args: Prisma.pagosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagosPayload>
          }
          aggregate: {
            args: Prisma.PagosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagos>
          }
          groupBy: {
            args: Prisma.pagosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagosGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagosCountArgs<ExtArgs>
            result: $Utils.Optional<PagosCountAggregateOutputType> | number
          }
        }
      }
      prestamos: {
        payload: Prisma.$prestamosPayload<ExtArgs>
        fields: Prisma.prestamosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prestamosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prestamosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>
          }
          findFirst: {
            args: Prisma.prestamosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prestamosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>
          }
          findMany: {
            args: Prisma.prestamosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>[]
          }
          create: {
            args: Prisma.prestamosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>
          }
          createMany: {
            args: Prisma.prestamosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prestamosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>[]
          }
          delete: {
            args: Prisma.prestamosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>
          }
          update: {
            args: Prisma.prestamosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>
          }
          deleteMany: {
            args: Prisma.prestamosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prestamosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prestamosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>[]
          }
          upsert: {
            args: Prisma.prestamosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamosPayload>
          }
          aggregate: {
            args: Prisma.PrestamosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrestamos>
          }
          groupBy: {
            args: Prisma.prestamosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrestamosGroupByOutputType>[]
          }
          count: {
            args: Prisma.prestamosCountArgs<ExtArgs>
            result: $Utils.Optional<PrestamosCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      datos_prestamos: {
        payload: Prisma.$datos_prestamosPayload<ExtArgs>
        fields: Prisma.datos_prestamosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.datos_prestamosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_prestamosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.datos_prestamosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_prestamosPayload>
          }
          findFirst: {
            args: Prisma.datos_prestamosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_prestamosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.datos_prestamosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_prestamosPayload>
          }
          findMany: {
            args: Prisma.datos_prestamosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_prestamosPayload>[]
          }
          create: {
            args: Prisma.datos_prestamosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_prestamosPayload>
          }
          createMany: {
            args: Prisma.datos_prestamosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.datos_prestamosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_prestamosPayload>[]
          }
          delete: {
            args: Prisma.datos_prestamosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_prestamosPayload>
          }
          update: {
            args: Prisma.datos_prestamosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_prestamosPayload>
          }
          deleteMany: {
            args: Prisma.datos_prestamosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.datos_prestamosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.datos_prestamosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_prestamosPayload>[]
          }
          upsert: {
            args: Prisma.datos_prestamosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$datos_prestamosPayload>
          }
          aggregate: {
            args: Prisma.Datos_prestamosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatos_prestamos>
          }
          groupBy: {
            args: Prisma.datos_prestamosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Datos_prestamosGroupByOutputType>[]
          }
          count: {
            args: Prisma.datos_prestamosCountArgs<ExtArgs>
            result: $Utils.Optional<Datos_prestamosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    clientes?: clientesOmit
    cuotas?: cuotasOmit
    logactividad?: logactividadOmit
    movimientoscaja?: movimientoscajaOmit
    pagos?: pagosOmit
    prestamos?: prestamosOmit
    usuarios?: usuariosOmit
    datos_prestamos?: datos_prestamosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientesCountOutputType
   */

  export type ClientesCountOutputType = {
    prestamos: number
  }

  export type ClientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamos?: boolean | ClientesCountOutputTypeCountPrestamosArgs
  }

  // Custom InputTypes
  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientesCountOutputType
     */
    select?: ClientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeCountPrestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prestamosWhereInput
  }


  /**
   * Count Type CuotasCountOutputType
   */

  export type CuotasCountOutputType = {
    pagos: number
  }

  export type CuotasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagos?: boolean | CuotasCountOutputTypeCountPagosArgs
  }

  // Custom InputTypes
  /**
   * CuotasCountOutputType without action
   */
  export type CuotasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuotasCountOutputType
     */
    select?: CuotasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CuotasCountOutputType without action
   */
  export type CuotasCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagosWhereInput
  }


  /**
   * Count Type PrestamosCountOutputType
   */

  export type PrestamosCountOutputType = {
    cuotas: number
  }

  export type PrestamosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuotas?: boolean | PrestamosCountOutputTypeCountCuotasArgs
  }

  // Custom InputTypes
  /**
   * PrestamosCountOutputType without action
   */
  export type PrestamosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestamosCountOutputType
     */
    select?: PrestamosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrestamosCountOutputType without action
   */
  export type PrestamosCountOutputTypeCountCuotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuotasWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    logactividad: number
    movimientoscaja: number
    pagos: number
    prestamos: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logactividad?: boolean | UsuariosCountOutputTypeCountLogactividadArgs
    movimientoscaja?: boolean | UsuariosCountOutputTypeCountMovimientoscajaArgs
    pagos?: boolean | UsuariosCountOutputTypeCountPagosArgs
    prestamos?: boolean | UsuariosCountOutputTypeCountPrestamosArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountLogactividadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logactividadWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountMovimientoscajaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimientoscajaWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagosWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountPrestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prestamosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    id_cliente: number | null
  }

  export type ClientesSumAggregateOutputType = {
    id_cliente: number | null
  }

  export type ClientesMinAggregateOutputType = {
    id_cliente: number | null
    nombre: string | null
    cedula: string | null
    telefono: string | null
    email: string | null
    direccion: string | null
    foto_url: string | null
    notas: string | null
    referido_por: string | null
    fecha_registro: Date | null
  }

  export type ClientesMaxAggregateOutputType = {
    id_cliente: number | null
    nombre: string | null
    cedula: string | null
    telefono: string | null
    email: string | null
    direccion: string | null
    foto_url: string | null
    notas: string | null
    referido_por: string | null
    fecha_registro: Date | null
  }

  export type ClientesCountAggregateOutputType = {
    id_cliente: number
    nombre: number
    cedula: number
    telefono: number
    email: number
    direccion: number
    foto_url: number
    notas: number
    referido_por: number
    fecha_registro: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    id_cliente?: true
  }

  export type ClientesSumAggregateInputType = {
    id_cliente?: true
  }

  export type ClientesMinAggregateInputType = {
    id_cliente?: true
    nombre?: true
    cedula?: true
    telefono?: true
    email?: true
    direccion?: true
    foto_url?: true
    notas?: true
    referido_por?: true
    fecha_registro?: true
  }

  export type ClientesMaxAggregateInputType = {
    id_cliente?: true
    nombre?: true
    cedula?: true
    telefono?: true
    email?: true
    direccion?: true
    foto_url?: true
    notas?: true
    referido_por?: true
    fecha_registro?: true
  }

  export type ClientesCountAggregateInputType = {
    id_cliente?: true
    nombre?: true
    cedula?: true
    telefono?: true
    email?: true
    direccion?: true
    foto_url?: true
    notas?: true
    referido_por?: true
    fecha_registro?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to aggregate.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type clientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientesWhereInput
    orderBy?: clientesOrderByWithAggregationInput | clientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: clientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    id_cliente: number
    nombre: string
    cedula: string
    telefono: string | null
    email: string | null
    direccion: string | null
    foto_url: string | null
    notas: string | null
    referido_por: string | null
    fecha_registro: Date | null
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends clientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type clientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    cedula?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    foto_url?: boolean
    notas?: boolean
    referido_por?: boolean
    fecha_registro?: boolean
    prestamos?: boolean | clientes$prestamosArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>

  export type clientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    cedula?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    foto_url?: boolean
    notas?: boolean
    referido_por?: boolean
    fecha_registro?: boolean
  }, ExtArgs["result"]["clientes"]>

  export type clientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    cedula?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    foto_url?: boolean
    notas?: boolean
    referido_por?: boolean
    fecha_registro?: boolean
  }, ExtArgs["result"]["clientes"]>

  export type clientesSelectScalar = {
    id_cliente?: boolean
    nombre?: boolean
    cedula?: boolean
    telefono?: boolean
    email?: boolean
    direccion?: boolean
    foto_url?: boolean
    notas?: boolean
    referido_por?: boolean
    fecha_registro?: boolean
  }

  export type clientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cliente" | "nombre" | "cedula" | "telefono" | "email" | "direccion" | "foto_url" | "notas" | "referido_por" | "fecha_registro", ExtArgs["result"]["clientes"]>
  export type clientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamos?: boolean | clientes$prestamosArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type clientesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $clientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clientes"
    objects: {
      prestamos: Prisma.$prestamosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cliente: number
      nombre: string
      cedula: string
      telefono: string | null
      email: string | null
      direccion: string | null
      foto_url: string | null
      notas: string | null
      referido_por: string | null
      fecha_registro: Date | null
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }

  type clientesGetPayload<S extends boolean | null | undefined | clientesDefaultArgs> = $Result.GetResult<Prisma.$clientesPayload, S>

  type clientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface clientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clientes'], meta: { name: 'clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {clientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientesFindUniqueArgs>(args: SelectSubset<T, clientesFindUniqueArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientesFindUniqueOrThrowArgs>(args: SelectSubset<T, clientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientesFindFirstArgs>(args?: SelectSubset<T, clientesFindFirstArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientesFindFirstOrThrowArgs>(args?: SelectSubset<T, clientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `id_cliente`
     * const clientesWithId_clienteOnly = await prisma.clientes.findMany({ select: { id_cliente: true } })
     * 
     */
    findMany<T extends clientesFindManyArgs>(args?: SelectSubset<T, clientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clientes.
     * @param {clientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
     */
    create<T extends clientesCreateArgs>(args: SelectSubset<T, clientesCreateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clientesCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientesCreateManyArgs>(args?: SelectSubset<T, clientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {clientesCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id_cliente`
     * const clientesWithId_clienteOnly = await prisma.clientes.createManyAndReturn({
     *   select: { id_cliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clientesCreateManyAndReturnArgs>(args?: SelectSubset<T, clientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clientes.
     * @param {clientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
     */
    delete<T extends clientesDeleteArgs>(args: SelectSubset<T, clientesDeleteArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clientes.
     * @param {clientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientesUpdateArgs>(args: SelectSubset<T, clientesUpdateArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientesDeleteManyArgs>(args?: SelectSubset<T, clientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientesUpdateManyArgs>(args: SelectSubset<T, clientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {clientesUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id_cliente`
     * const clientesWithId_clienteOnly = await prisma.clientes.updateManyAndReturn({
     *   select: { id_cliente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends clientesUpdateManyAndReturnArgs>(args: SelectSubset<T, clientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clientes.
     * @param {clientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
     */
    upsert<T extends clientesUpsertArgs>(args: SelectSubset<T, clientesUpsertArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clientesCountArgs>(
      args?: Subset<T, clientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientesGroupByArgs['orderBy'] }
        : { orderBy?: clientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clientes model
   */
  readonly fields: clientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prestamos<T extends clientes$prestamosArgs<ExtArgs> = {}>(args?: Subset<T, clientes$prestamosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clientes model
   */
  interface clientesFieldRefs {
    readonly id_cliente: FieldRef<"clientes", 'Int'>
    readonly nombre: FieldRef<"clientes", 'String'>
    readonly cedula: FieldRef<"clientes", 'String'>
    readonly telefono: FieldRef<"clientes", 'String'>
    readonly email: FieldRef<"clientes", 'String'>
    readonly direccion: FieldRef<"clientes", 'String'>
    readonly foto_url: FieldRef<"clientes", 'String'>
    readonly notas: FieldRef<"clientes", 'String'>
    readonly referido_por: FieldRef<"clientes", 'String'>
    readonly fecha_registro: FieldRef<"clientes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * clientes findUnique
   */
  export type clientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findUniqueOrThrow
   */
  export type clientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes findFirst
   */
  export type clientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findFirstOrThrow
   */
  export type clientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes findMany
   */
  export type clientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clientesOrderByWithRelationInput | clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * clientes create
   */
  export type clientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to create a clientes.
     */
    data: XOR<clientesCreateInput, clientesUncheckedCreateInput>
  }

  /**
   * clientes createMany
   */
  export type clientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clientesCreateManyInput | clientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientes createManyAndReturn
   */
  export type clientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * The data used to create many clientes.
     */
    data: clientesCreateManyInput | clientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clientes update
   */
  export type clientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The data needed to update a clientes.
     */
    data: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
    /**
     * Choose, which clientes to update.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes updateMany
   */
  export type clientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clientesUpdateManyMutationInput, clientesUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * clientes updateManyAndReturn
   */
  export type clientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * The data used to update clientes.
     */
    data: XOR<clientesUpdateManyMutationInput, clientesUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * clientes upsert
   */
  export type clientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * The filter to search for the clientes to update in case it exists.
     */
    where: clientesWhereUniqueInput
    /**
     * In case the clientes found by the `where` argument doesn't exist, create a new clientes with this data.
     */
    create: XOR<clientesCreateInput, clientesUncheckedCreateInput>
    /**
     * In case the clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientesUpdateInput, clientesUncheckedUpdateInput>
  }

  /**
   * clientes delete
   */
  export type clientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
    /**
     * Filter which clientes to delete.
     */
    where: clientesWhereUniqueInput
  }

  /**
   * clientes deleteMany
   */
  export type clientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clientesWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * clientes.prestamos
   */
  export type clientes$prestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    where?: prestamosWhereInput
    orderBy?: prestamosOrderByWithRelationInput | prestamosOrderByWithRelationInput[]
    cursor?: prestamosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * clientes without action
   */
  export type clientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clientes
     */
    select?: clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clientes
     */
    omit?: clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientesInclude<ExtArgs> | null
  }


  /**
   * Model cuotas
   */

  export type AggregateCuotas = {
    _count: CuotasCountAggregateOutputType | null
    _avg: CuotasAvgAggregateOutputType | null
    _sum: CuotasSumAggregateOutputType | null
    _min: CuotasMinAggregateOutputType | null
    _max: CuotasMaxAggregateOutputType | null
  }

  export type CuotasAvgAggregateOutputType = {
    id_cuota: number | null
    id_prestamo: number | null
    numero: number | null
    monto: Decimal | null
    monto_restante: Decimal | null
    intereses_mora: Decimal | null
  }

  export type CuotasSumAggregateOutputType = {
    id_cuota: number | null
    id_prestamo: number | null
    numero: number | null
    monto: Decimal | null
    monto_restante: Decimal | null
    intereses_mora: Decimal | null
  }

  export type CuotasMinAggregateOutputType = {
    id_cuota: number | null
    id_prestamo: number | null
    numero: number | null
    fecha_prevista: Date | null
    monto: Decimal | null
    monto_restante: Decimal | null
    intereses_mora: Decimal | null
    estado_pago: $Enums.estado_cuota | null
  }

  export type CuotasMaxAggregateOutputType = {
    id_cuota: number | null
    id_prestamo: number | null
    numero: number | null
    fecha_prevista: Date | null
    monto: Decimal | null
    monto_restante: Decimal | null
    intereses_mora: Decimal | null
    estado_pago: $Enums.estado_cuota | null
  }

  export type CuotasCountAggregateOutputType = {
    id_cuota: number
    id_prestamo: number
    numero: number
    fecha_prevista: number
    monto: number
    monto_restante: number
    intereses_mora: number
    estado_pago: number
    _all: number
  }


  export type CuotasAvgAggregateInputType = {
    id_cuota?: true
    id_prestamo?: true
    numero?: true
    monto?: true
    monto_restante?: true
    intereses_mora?: true
  }

  export type CuotasSumAggregateInputType = {
    id_cuota?: true
    id_prestamo?: true
    numero?: true
    monto?: true
    monto_restante?: true
    intereses_mora?: true
  }

  export type CuotasMinAggregateInputType = {
    id_cuota?: true
    id_prestamo?: true
    numero?: true
    fecha_prevista?: true
    monto?: true
    monto_restante?: true
    intereses_mora?: true
    estado_pago?: true
  }

  export type CuotasMaxAggregateInputType = {
    id_cuota?: true
    id_prestamo?: true
    numero?: true
    fecha_prevista?: true
    monto?: true
    monto_restante?: true
    intereses_mora?: true
    estado_pago?: true
  }

  export type CuotasCountAggregateInputType = {
    id_cuota?: true
    id_prestamo?: true
    numero?: true
    fecha_prevista?: true
    monto?: true
    monto_restante?: true
    intereses_mora?: true
    estado_pago?: true
    _all?: true
  }

  export type CuotasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cuotas to aggregate.
     */
    where?: cuotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuotas to fetch.
     */
    orderBy?: cuotasOrderByWithRelationInput | cuotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cuotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cuotas
    **/
    _count?: true | CuotasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuotasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuotasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuotasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuotasMaxAggregateInputType
  }

  export type GetCuotasAggregateType<T extends CuotasAggregateArgs> = {
        [P in keyof T & keyof AggregateCuotas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuotas[P]>
      : GetScalarType<T[P], AggregateCuotas[P]>
  }




  export type cuotasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cuotasWhereInput
    orderBy?: cuotasOrderByWithAggregationInput | cuotasOrderByWithAggregationInput[]
    by: CuotasScalarFieldEnum[] | CuotasScalarFieldEnum
    having?: cuotasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuotasCountAggregateInputType | true
    _avg?: CuotasAvgAggregateInputType
    _sum?: CuotasSumAggregateInputType
    _min?: CuotasMinAggregateInputType
    _max?: CuotasMaxAggregateInputType
  }

  export type CuotasGroupByOutputType = {
    id_cuota: number
    id_prestamo: number
    numero: number
    fecha_prevista: Date
    monto: Decimal
    monto_restante: Decimal
    intereses_mora: Decimal | null
    estado_pago: $Enums.estado_cuota | null
    _count: CuotasCountAggregateOutputType | null
    _avg: CuotasAvgAggregateOutputType | null
    _sum: CuotasSumAggregateOutputType | null
    _min: CuotasMinAggregateOutputType | null
    _max: CuotasMaxAggregateOutputType | null
  }

  type GetCuotasGroupByPayload<T extends cuotasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuotasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuotasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuotasGroupByOutputType[P]>
            : GetScalarType<T[P], CuotasGroupByOutputType[P]>
        }
      >
    >


  export type cuotasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cuota?: boolean
    id_prestamo?: boolean
    numero?: boolean
    fecha_prevista?: boolean
    monto?: boolean
    monto_restante?: boolean
    intereses_mora?: boolean
    estado_pago?: boolean
    prestamos?: boolean | prestamosDefaultArgs<ExtArgs>
    pagos?: boolean | cuotas$pagosArgs<ExtArgs>
    _count?: boolean | CuotasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuotas"]>

  export type cuotasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cuota?: boolean
    id_prestamo?: boolean
    numero?: boolean
    fecha_prevista?: boolean
    monto?: boolean
    monto_restante?: boolean
    intereses_mora?: boolean
    estado_pago?: boolean
    prestamos?: boolean | prestamosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuotas"]>

  export type cuotasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cuota?: boolean
    id_prestamo?: boolean
    numero?: boolean
    fecha_prevista?: boolean
    monto?: boolean
    monto_restante?: boolean
    intereses_mora?: boolean
    estado_pago?: boolean
    prestamos?: boolean | prestamosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cuotas"]>

  export type cuotasSelectScalar = {
    id_cuota?: boolean
    id_prestamo?: boolean
    numero?: boolean
    fecha_prevista?: boolean
    monto?: boolean
    monto_restante?: boolean
    intereses_mora?: boolean
    estado_pago?: boolean
  }

  export type cuotasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cuota" | "id_prestamo" | "numero" | "fecha_prevista" | "monto" | "monto_restante" | "intereses_mora" | "estado_pago", ExtArgs["result"]["cuotas"]>
  export type cuotasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamos?: boolean | prestamosDefaultArgs<ExtArgs>
    pagos?: boolean | cuotas$pagosArgs<ExtArgs>
    _count?: boolean | CuotasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cuotasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamos?: boolean | prestamosDefaultArgs<ExtArgs>
  }
  export type cuotasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamos?: boolean | prestamosDefaultArgs<ExtArgs>
  }

  export type $cuotasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cuotas"
    objects: {
      prestamos: Prisma.$prestamosPayload<ExtArgs>
      pagos: Prisma.$pagosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cuota: number
      id_prestamo: number
      numero: number
      fecha_prevista: Date
      monto: Prisma.Decimal
      monto_restante: Prisma.Decimal
      intereses_mora: Prisma.Decimal | null
      estado_pago: $Enums.estado_cuota | null
    }, ExtArgs["result"]["cuotas"]>
    composites: {}
  }

  type cuotasGetPayload<S extends boolean | null | undefined | cuotasDefaultArgs> = $Result.GetResult<Prisma.$cuotasPayload, S>

  type cuotasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cuotasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CuotasCountAggregateInputType | true
    }

  export interface cuotasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cuotas'], meta: { name: 'cuotas' } }
    /**
     * Find zero or one Cuotas that matches the filter.
     * @param {cuotasFindUniqueArgs} args - Arguments to find a Cuotas
     * @example
     * // Get one Cuotas
     * const cuotas = await prisma.cuotas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cuotasFindUniqueArgs>(args: SelectSubset<T, cuotasFindUniqueArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cuotas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cuotasFindUniqueOrThrowArgs} args - Arguments to find a Cuotas
     * @example
     * // Get one Cuotas
     * const cuotas = await prisma.cuotas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cuotasFindUniqueOrThrowArgs>(args: SelectSubset<T, cuotasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotasFindFirstArgs} args - Arguments to find a Cuotas
     * @example
     * // Get one Cuotas
     * const cuotas = await prisma.cuotas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cuotasFindFirstArgs>(args?: SelectSubset<T, cuotasFindFirstArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cuotas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotasFindFirstOrThrowArgs} args - Arguments to find a Cuotas
     * @example
     * // Get one Cuotas
     * const cuotas = await prisma.cuotas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cuotasFindFirstOrThrowArgs>(args?: SelectSubset<T, cuotasFindFirstOrThrowArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cuotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuotas
     * const cuotas = await prisma.cuotas.findMany()
     * 
     * // Get first 10 Cuotas
     * const cuotas = await prisma.cuotas.findMany({ take: 10 })
     * 
     * // Only select the `id_cuota`
     * const cuotasWithId_cuotaOnly = await prisma.cuotas.findMany({ select: { id_cuota: true } })
     * 
     */
    findMany<T extends cuotasFindManyArgs>(args?: SelectSubset<T, cuotasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cuotas.
     * @param {cuotasCreateArgs} args - Arguments to create a Cuotas.
     * @example
     * // Create one Cuotas
     * const Cuotas = await prisma.cuotas.create({
     *   data: {
     *     // ... data to create a Cuotas
     *   }
     * })
     * 
     */
    create<T extends cuotasCreateArgs>(args: SelectSubset<T, cuotasCreateArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cuotas.
     * @param {cuotasCreateManyArgs} args - Arguments to create many Cuotas.
     * @example
     * // Create many Cuotas
     * const cuotas = await prisma.cuotas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cuotasCreateManyArgs>(args?: SelectSubset<T, cuotasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cuotas and returns the data saved in the database.
     * @param {cuotasCreateManyAndReturnArgs} args - Arguments to create many Cuotas.
     * @example
     * // Create many Cuotas
     * const cuotas = await prisma.cuotas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cuotas and only return the `id_cuota`
     * const cuotasWithId_cuotaOnly = await prisma.cuotas.createManyAndReturn({
     *   select: { id_cuota: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cuotasCreateManyAndReturnArgs>(args?: SelectSubset<T, cuotasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cuotas.
     * @param {cuotasDeleteArgs} args - Arguments to delete one Cuotas.
     * @example
     * // Delete one Cuotas
     * const Cuotas = await prisma.cuotas.delete({
     *   where: {
     *     // ... filter to delete one Cuotas
     *   }
     * })
     * 
     */
    delete<T extends cuotasDeleteArgs>(args: SelectSubset<T, cuotasDeleteArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cuotas.
     * @param {cuotasUpdateArgs} args - Arguments to update one Cuotas.
     * @example
     * // Update one Cuotas
     * const cuotas = await prisma.cuotas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cuotasUpdateArgs>(args: SelectSubset<T, cuotasUpdateArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cuotas.
     * @param {cuotasDeleteManyArgs} args - Arguments to filter Cuotas to delete.
     * @example
     * // Delete a few Cuotas
     * const { count } = await prisma.cuotas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cuotasDeleteManyArgs>(args?: SelectSubset<T, cuotasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuotas
     * const cuotas = await prisma.cuotas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cuotasUpdateManyArgs>(args: SelectSubset<T, cuotasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuotas and returns the data updated in the database.
     * @param {cuotasUpdateManyAndReturnArgs} args - Arguments to update many Cuotas.
     * @example
     * // Update many Cuotas
     * const cuotas = await prisma.cuotas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cuotas and only return the `id_cuota`
     * const cuotasWithId_cuotaOnly = await prisma.cuotas.updateManyAndReturn({
     *   select: { id_cuota: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cuotasUpdateManyAndReturnArgs>(args: SelectSubset<T, cuotasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cuotas.
     * @param {cuotasUpsertArgs} args - Arguments to update or create a Cuotas.
     * @example
     * // Update or create a Cuotas
     * const cuotas = await prisma.cuotas.upsert({
     *   create: {
     *     // ... data to create a Cuotas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuotas we want to update
     *   }
     * })
     */
    upsert<T extends cuotasUpsertArgs>(args: SelectSubset<T, cuotasUpsertArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotasCountArgs} args - Arguments to filter Cuotas to count.
     * @example
     * // Count the number of Cuotas
     * const count = await prisma.cuotas.count({
     *   where: {
     *     // ... the filter for the Cuotas we want to count
     *   }
     * })
    **/
    count<T extends cuotasCountArgs>(
      args?: Subset<T, cuotasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuotasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CuotasAggregateArgs>(args: Subset<T, CuotasAggregateArgs>): Prisma.PrismaPromise<GetCuotasAggregateType<T>>

    /**
     * Group by Cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cuotasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cuotasGroupByArgs['orderBy'] }
        : { orderBy?: cuotasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cuotasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuotasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cuotas model
   */
  readonly fields: cuotasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cuotas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cuotasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prestamos<T extends prestamosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, prestamosDefaultArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pagos<T extends cuotas$pagosArgs<ExtArgs> = {}>(args?: Subset<T, cuotas$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cuotas model
   */
  interface cuotasFieldRefs {
    readonly id_cuota: FieldRef<"cuotas", 'Int'>
    readonly id_prestamo: FieldRef<"cuotas", 'Int'>
    readonly numero: FieldRef<"cuotas", 'Int'>
    readonly fecha_prevista: FieldRef<"cuotas", 'DateTime'>
    readonly monto: FieldRef<"cuotas", 'Decimal'>
    readonly monto_restante: FieldRef<"cuotas", 'Decimal'>
    readonly intereses_mora: FieldRef<"cuotas", 'Decimal'>
    readonly estado_pago: FieldRef<"cuotas", 'estado_cuota'>
  }
    

  // Custom InputTypes
  /**
   * cuotas findUnique
   */
  export type cuotasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * Filter, which cuotas to fetch.
     */
    where: cuotasWhereUniqueInput
  }

  /**
   * cuotas findUniqueOrThrow
   */
  export type cuotasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * Filter, which cuotas to fetch.
     */
    where: cuotasWhereUniqueInput
  }

  /**
   * cuotas findFirst
   */
  export type cuotasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * Filter, which cuotas to fetch.
     */
    where?: cuotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuotas to fetch.
     */
    orderBy?: cuotasOrderByWithRelationInput | cuotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cuotas.
     */
    cursor?: cuotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cuotas.
     */
    distinct?: CuotasScalarFieldEnum | CuotasScalarFieldEnum[]
  }

  /**
   * cuotas findFirstOrThrow
   */
  export type cuotasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * Filter, which cuotas to fetch.
     */
    where?: cuotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuotas to fetch.
     */
    orderBy?: cuotasOrderByWithRelationInput | cuotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cuotas.
     */
    cursor?: cuotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cuotas.
     */
    distinct?: CuotasScalarFieldEnum | CuotasScalarFieldEnum[]
  }

  /**
   * cuotas findMany
   */
  export type cuotasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * Filter, which cuotas to fetch.
     */
    where?: cuotasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuotas to fetch.
     */
    orderBy?: cuotasOrderByWithRelationInput | cuotasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cuotas.
     */
    cursor?: cuotasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuotas.
     */
    skip?: number
    distinct?: CuotasScalarFieldEnum | CuotasScalarFieldEnum[]
  }

  /**
   * cuotas create
   */
  export type cuotasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * The data needed to create a cuotas.
     */
    data: XOR<cuotasCreateInput, cuotasUncheckedCreateInput>
  }

  /**
   * cuotas createMany
   */
  export type cuotasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cuotas.
     */
    data: cuotasCreateManyInput | cuotasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cuotas createManyAndReturn
   */
  export type cuotasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * The data used to create many cuotas.
     */
    data: cuotasCreateManyInput | cuotasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cuotas update
   */
  export type cuotasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * The data needed to update a cuotas.
     */
    data: XOR<cuotasUpdateInput, cuotasUncheckedUpdateInput>
    /**
     * Choose, which cuotas to update.
     */
    where: cuotasWhereUniqueInput
  }

  /**
   * cuotas updateMany
   */
  export type cuotasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cuotas.
     */
    data: XOR<cuotasUpdateManyMutationInput, cuotasUncheckedUpdateManyInput>
    /**
     * Filter which cuotas to update
     */
    where?: cuotasWhereInput
    /**
     * Limit how many cuotas to update.
     */
    limit?: number
  }

  /**
   * cuotas updateManyAndReturn
   */
  export type cuotasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * The data used to update cuotas.
     */
    data: XOR<cuotasUpdateManyMutationInput, cuotasUncheckedUpdateManyInput>
    /**
     * Filter which cuotas to update
     */
    where?: cuotasWhereInput
    /**
     * Limit how many cuotas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cuotas upsert
   */
  export type cuotasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * The filter to search for the cuotas to update in case it exists.
     */
    where: cuotasWhereUniqueInput
    /**
     * In case the cuotas found by the `where` argument doesn't exist, create a new cuotas with this data.
     */
    create: XOR<cuotasCreateInput, cuotasUncheckedCreateInput>
    /**
     * In case the cuotas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cuotasUpdateInput, cuotasUncheckedUpdateInput>
  }

  /**
   * cuotas delete
   */
  export type cuotasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    /**
     * Filter which cuotas to delete.
     */
    where: cuotasWhereUniqueInput
  }

  /**
   * cuotas deleteMany
   */
  export type cuotasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cuotas to delete
     */
    where?: cuotasWhereInput
    /**
     * Limit how many cuotas to delete.
     */
    limit?: number
  }

  /**
   * cuotas.pagos
   */
  export type cuotas$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    where?: pagosWhereInput
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    cursor?: pagosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * cuotas without action
   */
  export type cuotasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
  }


  /**
   * Model logactividad
   */

  export type AggregateLogactividad = {
    _count: LogactividadCountAggregateOutputType | null
    _avg: LogactividadAvgAggregateOutputType | null
    _sum: LogactividadSumAggregateOutputType | null
    _min: LogactividadMinAggregateOutputType | null
    _max: LogactividadMaxAggregateOutputType | null
  }

  export type LogactividadAvgAggregateOutputType = {
    id_log: number | null
    id_usuario: number | null
  }

  export type LogactividadSumAggregateOutputType = {
    id_log: number | null
    id_usuario: number | null
  }

  export type LogactividadMinAggregateOutputType = {
    id_log: number | null
    id_usuario: number | null
    accion: string | null
    fecha_hora: Date | null
  }

  export type LogactividadMaxAggregateOutputType = {
    id_log: number | null
    id_usuario: number | null
    accion: string | null
    fecha_hora: Date | null
  }

  export type LogactividadCountAggregateOutputType = {
    id_log: number
    id_usuario: number
    accion: number
    fecha_hora: number
    _all: number
  }


  export type LogactividadAvgAggregateInputType = {
    id_log?: true
    id_usuario?: true
  }

  export type LogactividadSumAggregateInputType = {
    id_log?: true
    id_usuario?: true
  }

  export type LogactividadMinAggregateInputType = {
    id_log?: true
    id_usuario?: true
    accion?: true
    fecha_hora?: true
  }

  export type LogactividadMaxAggregateInputType = {
    id_log?: true
    id_usuario?: true
    accion?: true
    fecha_hora?: true
  }

  export type LogactividadCountAggregateInputType = {
    id_log?: true
    id_usuario?: true
    accion?: true
    fecha_hora?: true
    _all?: true
  }

  export type LogactividadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logactividad to aggregate.
     */
    where?: logactividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logactividads to fetch.
     */
    orderBy?: logactividadOrderByWithRelationInput | logactividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logactividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logactividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logactividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logactividads
    **/
    _count?: true | LogactividadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogactividadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogactividadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogactividadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogactividadMaxAggregateInputType
  }

  export type GetLogactividadAggregateType<T extends LogactividadAggregateArgs> = {
        [P in keyof T & keyof AggregateLogactividad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogactividad[P]>
      : GetScalarType<T[P], AggregateLogactividad[P]>
  }




  export type logactividadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logactividadWhereInput
    orderBy?: logactividadOrderByWithAggregationInput | logactividadOrderByWithAggregationInput[]
    by: LogactividadScalarFieldEnum[] | LogactividadScalarFieldEnum
    having?: logactividadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogactividadCountAggregateInputType | true
    _avg?: LogactividadAvgAggregateInputType
    _sum?: LogactividadSumAggregateInputType
    _min?: LogactividadMinAggregateInputType
    _max?: LogactividadMaxAggregateInputType
  }

  export type LogactividadGroupByOutputType = {
    id_log: number
    id_usuario: number | null
    accion: string
    fecha_hora: Date | null
    _count: LogactividadCountAggregateOutputType | null
    _avg: LogactividadAvgAggregateOutputType | null
    _sum: LogactividadSumAggregateOutputType | null
    _min: LogactividadMinAggregateOutputType | null
    _max: LogactividadMaxAggregateOutputType | null
  }

  type GetLogactividadGroupByPayload<T extends logactividadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogactividadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogactividadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogactividadGroupByOutputType[P]>
            : GetScalarType<T[P], LogactividadGroupByOutputType[P]>
        }
      >
    >


  export type logactividadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_log?: boolean
    id_usuario?: boolean
    accion?: boolean
    fecha_hora?: boolean
    usuarios?: boolean | logactividad$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["logactividad"]>

  export type logactividadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_log?: boolean
    id_usuario?: boolean
    accion?: boolean
    fecha_hora?: boolean
    usuarios?: boolean | logactividad$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["logactividad"]>

  export type logactividadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_log?: boolean
    id_usuario?: boolean
    accion?: boolean
    fecha_hora?: boolean
    usuarios?: boolean | logactividad$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["logactividad"]>

  export type logactividadSelectScalar = {
    id_log?: boolean
    id_usuario?: boolean
    accion?: boolean
    fecha_hora?: boolean
  }

  export type logactividadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_log" | "id_usuario" | "accion" | "fecha_hora", ExtArgs["result"]["logactividad"]>
  export type logactividadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | logactividad$usuariosArgs<ExtArgs>
  }
  export type logactividadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | logactividad$usuariosArgs<ExtArgs>
  }
  export type logactividadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | logactividad$usuariosArgs<ExtArgs>
  }

  export type $logactividadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logactividad"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_log: number
      id_usuario: number | null
      accion: string
      fecha_hora: Date | null
    }, ExtArgs["result"]["logactividad"]>
    composites: {}
  }

  type logactividadGetPayload<S extends boolean | null | undefined | logactividadDefaultArgs> = $Result.GetResult<Prisma.$logactividadPayload, S>

  type logactividadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logactividadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogactividadCountAggregateInputType | true
    }

  export interface logactividadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logactividad'], meta: { name: 'logactividad' } }
    /**
     * Find zero or one Logactividad that matches the filter.
     * @param {logactividadFindUniqueArgs} args - Arguments to find a Logactividad
     * @example
     * // Get one Logactividad
     * const logactividad = await prisma.logactividad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logactividadFindUniqueArgs>(args: SelectSubset<T, logactividadFindUniqueArgs<ExtArgs>>): Prisma__logactividadClient<$Result.GetResult<Prisma.$logactividadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logactividad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logactividadFindUniqueOrThrowArgs} args - Arguments to find a Logactividad
     * @example
     * // Get one Logactividad
     * const logactividad = await prisma.logactividad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logactividadFindUniqueOrThrowArgs>(args: SelectSubset<T, logactividadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logactividadClient<$Result.GetResult<Prisma.$logactividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logactividad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logactividadFindFirstArgs} args - Arguments to find a Logactividad
     * @example
     * // Get one Logactividad
     * const logactividad = await prisma.logactividad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logactividadFindFirstArgs>(args?: SelectSubset<T, logactividadFindFirstArgs<ExtArgs>>): Prisma__logactividadClient<$Result.GetResult<Prisma.$logactividadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logactividad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logactividadFindFirstOrThrowArgs} args - Arguments to find a Logactividad
     * @example
     * // Get one Logactividad
     * const logactividad = await prisma.logactividad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logactividadFindFirstOrThrowArgs>(args?: SelectSubset<T, logactividadFindFirstOrThrowArgs<ExtArgs>>): Prisma__logactividadClient<$Result.GetResult<Prisma.$logactividadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logactividads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logactividadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logactividads
     * const logactividads = await prisma.logactividad.findMany()
     * 
     * // Get first 10 Logactividads
     * const logactividads = await prisma.logactividad.findMany({ take: 10 })
     * 
     * // Only select the `id_log`
     * const logactividadWithId_logOnly = await prisma.logactividad.findMany({ select: { id_log: true } })
     * 
     */
    findMany<T extends logactividadFindManyArgs>(args?: SelectSubset<T, logactividadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logactividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logactividad.
     * @param {logactividadCreateArgs} args - Arguments to create a Logactividad.
     * @example
     * // Create one Logactividad
     * const Logactividad = await prisma.logactividad.create({
     *   data: {
     *     // ... data to create a Logactividad
     *   }
     * })
     * 
     */
    create<T extends logactividadCreateArgs>(args: SelectSubset<T, logactividadCreateArgs<ExtArgs>>): Prisma__logactividadClient<$Result.GetResult<Prisma.$logactividadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logactividads.
     * @param {logactividadCreateManyArgs} args - Arguments to create many Logactividads.
     * @example
     * // Create many Logactividads
     * const logactividad = await prisma.logactividad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logactividadCreateManyArgs>(args?: SelectSubset<T, logactividadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logactividads and returns the data saved in the database.
     * @param {logactividadCreateManyAndReturnArgs} args - Arguments to create many Logactividads.
     * @example
     * // Create many Logactividads
     * const logactividad = await prisma.logactividad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logactividads and only return the `id_log`
     * const logactividadWithId_logOnly = await prisma.logactividad.createManyAndReturn({
     *   select: { id_log: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends logactividadCreateManyAndReturnArgs>(args?: SelectSubset<T, logactividadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logactividadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Logactividad.
     * @param {logactividadDeleteArgs} args - Arguments to delete one Logactividad.
     * @example
     * // Delete one Logactividad
     * const Logactividad = await prisma.logactividad.delete({
     *   where: {
     *     // ... filter to delete one Logactividad
     *   }
     * })
     * 
     */
    delete<T extends logactividadDeleteArgs>(args: SelectSubset<T, logactividadDeleteArgs<ExtArgs>>): Prisma__logactividadClient<$Result.GetResult<Prisma.$logactividadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logactividad.
     * @param {logactividadUpdateArgs} args - Arguments to update one Logactividad.
     * @example
     * // Update one Logactividad
     * const logactividad = await prisma.logactividad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logactividadUpdateArgs>(args: SelectSubset<T, logactividadUpdateArgs<ExtArgs>>): Prisma__logactividadClient<$Result.GetResult<Prisma.$logactividadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logactividads.
     * @param {logactividadDeleteManyArgs} args - Arguments to filter Logactividads to delete.
     * @example
     * // Delete a few Logactividads
     * const { count } = await prisma.logactividad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logactividadDeleteManyArgs>(args?: SelectSubset<T, logactividadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logactividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logactividadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logactividads
     * const logactividad = await prisma.logactividad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logactividadUpdateManyArgs>(args: SelectSubset<T, logactividadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logactividads and returns the data updated in the database.
     * @param {logactividadUpdateManyAndReturnArgs} args - Arguments to update many Logactividads.
     * @example
     * // Update many Logactividads
     * const logactividad = await prisma.logactividad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logactividads and only return the `id_log`
     * const logactividadWithId_logOnly = await prisma.logactividad.updateManyAndReturn({
     *   select: { id_log: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends logactividadUpdateManyAndReturnArgs>(args: SelectSubset<T, logactividadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logactividadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Logactividad.
     * @param {logactividadUpsertArgs} args - Arguments to update or create a Logactividad.
     * @example
     * // Update or create a Logactividad
     * const logactividad = await prisma.logactividad.upsert({
     *   create: {
     *     // ... data to create a Logactividad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logactividad we want to update
     *   }
     * })
     */
    upsert<T extends logactividadUpsertArgs>(args: SelectSubset<T, logactividadUpsertArgs<ExtArgs>>): Prisma__logactividadClient<$Result.GetResult<Prisma.$logactividadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logactividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logactividadCountArgs} args - Arguments to filter Logactividads to count.
     * @example
     * // Count the number of Logactividads
     * const count = await prisma.logactividad.count({
     *   where: {
     *     // ... the filter for the Logactividads we want to count
     *   }
     * })
    **/
    count<T extends logactividadCountArgs>(
      args?: Subset<T, logactividadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogactividadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logactividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogactividadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogactividadAggregateArgs>(args: Subset<T, LogactividadAggregateArgs>): Prisma.PrismaPromise<GetLogactividadAggregateType<T>>

    /**
     * Group by Logactividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logactividadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends logactividadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logactividadGroupByArgs['orderBy'] }
        : { orderBy?: logactividadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, logactividadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogactividadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logactividad model
   */
  readonly fields: logactividadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logactividad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logactividadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends logactividad$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, logactividad$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the logactividad model
   */
  interface logactividadFieldRefs {
    readonly id_log: FieldRef<"logactividad", 'Int'>
    readonly id_usuario: FieldRef<"logactividad", 'Int'>
    readonly accion: FieldRef<"logactividad", 'String'>
    readonly fecha_hora: FieldRef<"logactividad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * logactividad findUnique
   */
  export type logactividadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logactividad
     */
    select?: logactividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logactividad
     */
    omit?: logactividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logactividadInclude<ExtArgs> | null
    /**
     * Filter, which logactividad to fetch.
     */
    where: logactividadWhereUniqueInput
  }

  /**
   * logactividad findUniqueOrThrow
   */
  export type logactividadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logactividad
     */
    select?: logactividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logactividad
     */
    omit?: logactividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logactividadInclude<ExtArgs> | null
    /**
     * Filter, which logactividad to fetch.
     */
    where: logactividadWhereUniqueInput
  }

  /**
   * logactividad findFirst
   */
  export type logactividadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logactividad
     */
    select?: logactividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logactividad
     */
    omit?: logactividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logactividadInclude<ExtArgs> | null
    /**
     * Filter, which logactividad to fetch.
     */
    where?: logactividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logactividads to fetch.
     */
    orderBy?: logactividadOrderByWithRelationInput | logactividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logactividads.
     */
    cursor?: logactividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logactividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logactividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logactividads.
     */
    distinct?: LogactividadScalarFieldEnum | LogactividadScalarFieldEnum[]
  }

  /**
   * logactividad findFirstOrThrow
   */
  export type logactividadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logactividad
     */
    select?: logactividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logactividad
     */
    omit?: logactividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logactividadInclude<ExtArgs> | null
    /**
     * Filter, which logactividad to fetch.
     */
    where?: logactividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logactividads to fetch.
     */
    orderBy?: logactividadOrderByWithRelationInput | logactividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logactividads.
     */
    cursor?: logactividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logactividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logactividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logactividads.
     */
    distinct?: LogactividadScalarFieldEnum | LogactividadScalarFieldEnum[]
  }

  /**
   * logactividad findMany
   */
  export type logactividadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logactividad
     */
    select?: logactividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logactividad
     */
    omit?: logactividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logactividadInclude<ExtArgs> | null
    /**
     * Filter, which logactividads to fetch.
     */
    where?: logactividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logactividads to fetch.
     */
    orderBy?: logactividadOrderByWithRelationInput | logactividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logactividads.
     */
    cursor?: logactividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logactividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logactividads.
     */
    skip?: number
    distinct?: LogactividadScalarFieldEnum | LogactividadScalarFieldEnum[]
  }

  /**
   * logactividad create
   */
  export type logactividadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logactividad
     */
    select?: logactividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logactividad
     */
    omit?: logactividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logactividadInclude<ExtArgs> | null
    /**
     * The data needed to create a logactividad.
     */
    data: XOR<logactividadCreateInput, logactividadUncheckedCreateInput>
  }

  /**
   * logactividad createMany
   */
  export type logactividadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logactividads.
     */
    data: logactividadCreateManyInput | logactividadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logactividad createManyAndReturn
   */
  export type logactividadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logactividad
     */
    select?: logactividadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logactividad
     */
    omit?: logactividadOmit<ExtArgs> | null
    /**
     * The data used to create many logactividads.
     */
    data: logactividadCreateManyInput | logactividadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logactividadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * logactividad update
   */
  export type logactividadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logactividad
     */
    select?: logactividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logactividad
     */
    omit?: logactividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logactividadInclude<ExtArgs> | null
    /**
     * The data needed to update a logactividad.
     */
    data: XOR<logactividadUpdateInput, logactividadUncheckedUpdateInput>
    /**
     * Choose, which logactividad to update.
     */
    where: logactividadWhereUniqueInput
  }

  /**
   * logactividad updateMany
   */
  export type logactividadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logactividads.
     */
    data: XOR<logactividadUpdateManyMutationInput, logactividadUncheckedUpdateManyInput>
    /**
     * Filter which logactividads to update
     */
    where?: logactividadWhereInput
    /**
     * Limit how many logactividads to update.
     */
    limit?: number
  }

  /**
   * logactividad updateManyAndReturn
   */
  export type logactividadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logactividad
     */
    select?: logactividadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logactividad
     */
    omit?: logactividadOmit<ExtArgs> | null
    /**
     * The data used to update logactividads.
     */
    data: XOR<logactividadUpdateManyMutationInput, logactividadUncheckedUpdateManyInput>
    /**
     * Filter which logactividads to update
     */
    where?: logactividadWhereInput
    /**
     * Limit how many logactividads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logactividadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * logactividad upsert
   */
  export type logactividadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logactividad
     */
    select?: logactividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logactividad
     */
    omit?: logactividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logactividadInclude<ExtArgs> | null
    /**
     * The filter to search for the logactividad to update in case it exists.
     */
    where: logactividadWhereUniqueInput
    /**
     * In case the logactividad found by the `where` argument doesn't exist, create a new logactividad with this data.
     */
    create: XOR<logactividadCreateInput, logactividadUncheckedCreateInput>
    /**
     * In case the logactividad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logactividadUpdateInput, logactividadUncheckedUpdateInput>
  }

  /**
   * logactividad delete
   */
  export type logactividadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logactividad
     */
    select?: logactividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logactividad
     */
    omit?: logactividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logactividadInclude<ExtArgs> | null
    /**
     * Filter which logactividad to delete.
     */
    where: logactividadWhereUniqueInput
  }

  /**
   * logactividad deleteMany
   */
  export type logactividadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logactividads to delete
     */
    where?: logactividadWhereInput
    /**
     * Limit how many logactividads to delete.
     */
    limit?: number
  }

  /**
   * logactividad.usuarios
   */
  export type logactividad$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * logactividad without action
   */
  export type logactividadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logactividad
     */
    select?: logactividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logactividad
     */
    omit?: logactividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logactividadInclude<ExtArgs> | null
  }


  /**
   * Model movimientoscaja
   */

  export type AggregateMovimientoscaja = {
    _count: MovimientoscajaCountAggregateOutputType | null
    _avg: MovimientoscajaAvgAggregateOutputType | null
    _sum: MovimientoscajaSumAggregateOutputType | null
    _min: MovimientoscajaMinAggregateOutputType | null
    _max: MovimientoscajaMaxAggregateOutputType | null
  }

  export type MovimientoscajaAvgAggregateOutputType = {
    id_movimiento: number | null
    prestamo_id: number | null
    pago_id: number | null
    monto: Decimal | null
    usuario_id: number | null
  }

  export type MovimientoscajaSumAggregateOutputType = {
    id_movimiento: number | null
    prestamo_id: number | null
    pago_id: number | null
    monto: Decimal | null
    usuario_id: number | null
  }

  export type MovimientoscajaMinAggregateOutputType = {
    id_movimiento: number | null
    tipo: $Enums.tipo_movimiento | null
    prestamo_id: number | null
    pago_id: number | null
    descripcion: string | null
    monto: Decimal | null
    fecha: Date | null
    usuario_id: number | null
  }

  export type MovimientoscajaMaxAggregateOutputType = {
    id_movimiento: number | null
    tipo: $Enums.tipo_movimiento | null
    prestamo_id: number | null
    pago_id: number | null
    descripcion: string | null
    monto: Decimal | null
    fecha: Date | null
    usuario_id: number | null
  }

  export type MovimientoscajaCountAggregateOutputType = {
    id_movimiento: number
    tipo: number
    prestamo_id: number
    pago_id: number
    descripcion: number
    monto: number
    fecha: number
    usuario_id: number
    _all: number
  }


  export type MovimientoscajaAvgAggregateInputType = {
    id_movimiento?: true
    prestamo_id?: true
    pago_id?: true
    monto?: true
    usuario_id?: true
  }

  export type MovimientoscajaSumAggregateInputType = {
    id_movimiento?: true
    prestamo_id?: true
    pago_id?: true
    monto?: true
    usuario_id?: true
  }

  export type MovimientoscajaMinAggregateInputType = {
    id_movimiento?: true
    tipo?: true
    prestamo_id?: true
    pago_id?: true
    descripcion?: true
    monto?: true
    fecha?: true
    usuario_id?: true
  }

  export type MovimientoscajaMaxAggregateInputType = {
    id_movimiento?: true
    tipo?: true
    prestamo_id?: true
    pago_id?: true
    descripcion?: true
    monto?: true
    fecha?: true
    usuario_id?: true
  }

  export type MovimientoscajaCountAggregateInputType = {
    id_movimiento?: true
    tipo?: true
    prestamo_id?: true
    pago_id?: true
    descripcion?: true
    monto?: true
    fecha?: true
    usuario_id?: true
    _all?: true
  }

  export type MovimientoscajaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movimientoscaja to aggregate.
     */
    where?: movimientoscajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientoscajas to fetch.
     */
    orderBy?: movimientoscajaOrderByWithRelationInput | movimientoscajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: movimientoscajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientoscajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientoscajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movimientoscajas
    **/
    _count?: true | MovimientoscajaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimientoscajaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimientoscajaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimientoscajaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimientoscajaMaxAggregateInputType
  }

  export type GetMovimientoscajaAggregateType<T extends MovimientoscajaAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimientoscaja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimientoscaja[P]>
      : GetScalarType<T[P], AggregateMovimientoscaja[P]>
  }




  export type movimientoscajaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movimientoscajaWhereInput
    orderBy?: movimientoscajaOrderByWithAggregationInput | movimientoscajaOrderByWithAggregationInput[]
    by: MovimientoscajaScalarFieldEnum[] | MovimientoscajaScalarFieldEnum
    having?: movimientoscajaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimientoscajaCountAggregateInputType | true
    _avg?: MovimientoscajaAvgAggregateInputType
    _sum?: MovimientoscajaSumAggregateInputType
    _min?: MovimientoscajaMinAggregateInputType
    _max?: MovimientoscajaMaxAggregateInputType
  }

  export type MovimientoscajaGroupByOutputType = {
    id_movimiento: number
    tipo: $Enums.tipo_movimiento
    prestamo_id: number | null
    pago_id: number | null
    descripcion: string | null
    monto: Decimal
    fecha: Date | null
    usuario_id: number | null
    _count: MovimientoscajaCountAggregateOutputType | null
    _avg: MovimientoscajaAvgAggregateOutputType | null
    _sum: MovimientoscajaSumAggregateOutputType | null
    _min: MovimientoscajaMinAggregateOutputType | null
    _max: MovimientoscajaMaxAggregateOutputType | null
  }

  type GetMovimientoscajaGroupByPayload<T extends movimientoscajaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimientoscajaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimientoscajaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimientoscajaGroupByOutputType[P]>
            : GetScalarType<T[P], MovimientoscajaGroupByOutputType[P]>
        }
      >
    >


  export type movimientoscajaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_movimiento?: boolean
    tipo?: boolean
    prestamo_id?: boolean
    pago_id?: boolean
    descripcion?: boolean
    monto?: boolean
    fecha?: boolean
    usuario_id?: boolean
    usuarios?: boolean | movimientoscaja$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoscaja"]>

  export type movimientoscajaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_movimiento?: boolean
    tipo?: boolean
    prestamo_id?: boolean
    pago_id?: boolean
    descripcion?: boolean
    monto?: boolean
    fecha?: boolean
    usuario_id?: boolean
    usuarios?: boolean | movimientoscaja$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoscaja"]>

  export type movimientoscajaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_movimiento?: boolean
    tipo?: boolean
    prestamo_id?: boolean
    pago_id?: boolean
    descripcion?: boolean
    monto?: boolean
    fecha?: boolean
    usuario_id?: boolean
    usuarios?: boolean | movimientoscaja$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoscaja"]>

  export type movimientoscajaSelectScalar = {
    id_movimiento?: boolean
    tipo?: boolean
    prestamo_id?: boolean
    pago_id?: boolean
    descripcion?: boolean
    monto?: boolean
    fecha?: boolean
    usuario_id?: boolean
  }

  export type movimientoscajaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_movimiento" | "tipo" | "prestamo_id" | "pago_id" | "descripcion" | "monto" | "fecha" | "usuario_id", ExtArgs["result"]["movimientoscaja"]>
  export type movimientoscajaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | movimientoscaja$usuariosArgs<ExtArgs>
  }
  export type movimientoscajaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | movimientoscaja$usuariosArgs<ExtArgs>
  }
  export type movimientoscajaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | movimientoscaja$usuariosArgs<ExtArgs>
  }

  export type $movimientoscajaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movimientoscaja"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_movimiento: number
      tipo: $Enums.tipo_movimiento
      prestamo_id: number | null
      pago_id: number | null
      descripcion: string | null
      monto: Prisma.Decimal
      fecha: Date | null
      usuario_id: number | null
    }, ExtArgs["result"]["movimientoscaja"]>
    composites: {}
  }

  type movimientoscajaGetPayload<S extends boolean | null | undefined | movimientoscajaDefaultArgs> = $Result.GetResult<Prisma.$movimientoscajaPayload, S>

  type movimientoscajaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<movimientoscajaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimientoscajaCountAggregateInputType | true
    }

  export interface movimientoscajaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movimientoscaja'], meta: { name: 'movimientoscaja' } }
    /**
     * Find zero or one Movimientoscaja that matches the filter.
     * @param {movimientoscajaFindUniqueArgs} args - Arguments to find a Movimientoscaja
     * @example
     * // Get one Movimientoscaja
     * const movimientoscaja = await prisma.movimientoscaja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends movimientoscajaFindUniqueArgs>(args: SelectSubset<T, movimientoscajaFindUniqueArgs<ExtArgs>>): Prisma__movimientoscajaClient<$Result.GetResult<Prisma.$movimientoscajaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movimientoscaja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {movimientoscajaFindUniqueOrThrowArgs} args - Arguments to find a Movimientoscaja
     * @example
     * // Get one Movimientoscaja
     * const movimientoscaja = await prisma.movimientoscaja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends movimientoscajaFindUniqueOrThrowArgs>(args: SelectSubset<T, movimientoscajaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__movimientoscajaClient<$Result.GetResult<Prisma.$movimientoscajaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimientoscaja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientoscajaFindFirstArgs} args - Arguments to find a Movimientoscaja
     * @example
     * // Get one Movimientoscaja
     * const movimientoscaja = await prisma.movimientoscaja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends movimientoscajaFindFirstArgs>(args?: SelectSubset<T, movimientoscajaFindFirstArgs<ExtArgs>>): Prisma__movimientoscajaClient<$Result.GetResult<Prisma.$movimientoscajaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimientoscaja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientoscajaFindFirstOrThrowArgs} args - Arguments to find a Movimientoscaja
     * @example
     * // Get one Movimientoscaja
     * const movimientoscaja = await prisma.movimientoscaja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends movimientoscajaFindFirstOrThrowArgs>(args?: SelectSubset<T, movimientoscajaFindFirstOrThrowArgs<ExtArgs>>): Prisma__movimientoscajaClient<$Result.GetResult<Prisma.$movimientoscajaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movimientoscajas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientoscajaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movimientoscajas
     * const movimientoscajas = await prisma.movimientoscaja.findMany()
     * 
     * // Get first 10 Movimientoscajas
     * const movimientoscajas = await prisma.movimientoscaja.findMany({ take: 10 })
     * 
     * // Only select the `id_movimiento`
     * const movimientoscajaWithId_movimientoOnly = await prisma.movimientoscaja.findMany({ select: { id_movimiento: true } })
     * 
     */
    findMany<T extends movimientoscajaFindManyArgs>(args?: SelectSubset<T, movimientoscajaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientoscajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movimientoscaja.
     * @param {movimientoscajaCreateArgs} args - Arguments to create a Movimientoscaja.
     * @example
     * // Create one Movimientoscaja
     * const Movimientoscaja = await prisma.movimientoscaja.create({
     *   data: {
     *     // ... data to create a Movimientoscaja
     *   }
     * })
     * 
     */
    create<T extends movimientoscajaCreateArgs>(args: SelectSubset<T, movimientoscajaCreateArgs<ExtArgs>>): Prisma__movimientoscajaClient<$Result.GetResult<Prisma.$movimientoscajaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movimientoscajas.
     * @param {movimientoscajaCreateManyArgs} args - Arguments to create many Movimientoscajas.
     * @example
     * // Create many Movimientoscajas
     * const movimientoscaja = await prisma.movimientoscaja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends movimientoscajaCreateManyArgs>(args?: SelectSubset<T, movimientoscajaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movimientoscajas and returns the data saved in the database.
     * @param {movimientoscajaCreateManyAndReturnArgs} args - Arguments to create many Movimientoscajas.
     * @example
     * // Create many Movimientoscajas
     * const movimientoscaja = await prisma.movimientoscaja.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movimientoscajas and only return the `id_movimiento`
     * const movimientoscajaWithId_movimientoOnly = await prisma.movimientoscaja.createManyAndReturn({
     *   select: { id_movimiento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends movimientoscajaCreateManyAndReturnArgs>(args?: SelectSubset<T, movimientoscajaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientoscajaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movimientoscaja.
     * @param {movimientoscajaDeleteArgs} args - Arguments to delete one Movimientoscaja.
     * @example
     * // Delete one Movimientoscaja
     * const Movimientoscaja = await prisma.movimientoscaja.delete({
     *   where: {
     *     // ... filter to delete one Movimientoscaja
     *   }
     * })
     * 
     */
    delete<T extends movimientoscajaDeleteArgs>(args: SelectSubset<T, movimientoscajaDeleteArgs<ExtArgs>>): Prisma__movimientoscajaClient<$Result.GetResult<Prisma.$movimientoscajaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movimientoscaja.
     * @param {movimientoscajaUpdateArgs} args - Arguments to update one Movimientoscaja.
     * @example
     * // Update one Movimientoscaja
     * const movimientoscaja = await prisma.movimientoscaja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends movimientoscajaUpdateArgs>(args: SelectSubset<T, movimientoscajaUpdateArgs<ExtArgs>>): Prisma__movimientoscajaClient<$Result.GetResult<Prisma.$movimientoscajaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movimientoscajas.
     * @param {movimientoscajaDeleteManyArgs} args - Arguments to filter Movimientoscajas to delete.
     * @example
     * // Delete a few Movimientoscajas
     * const { count } = await prisma.movimientoscaja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends movimientoscajaDeleteManyArgs>(args?: SelectSubset<T, movimientoscajaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimientoscajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientoscajaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movimientoscajas
     * const movimientoscaja = await prisma.movimientoscaja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends movimientoscajaUpdateManyArgs>(args: SelectSubset<T, movimientoscajaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimientoscajas and returns the data updated in the database.
     * @param {movimientoscajaUpdateManyAndReturnArgs} args - Arguments to update many Movimientoscajas.
     * @example
     * // Update many Movimientoscajas
     * const movimientoscaja = await prisma.movimientoscaja.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movimientoscajas and only return the `id_movimiento`
     * const movimientoscajaWithId_movimientoOnly = await prisma.movimientoscaja.updateManyAndReturn({
     *   select: { id_movimiento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends movimientoscajaUpdateManyAndReturnArgs>(args: SelectSubset<T, movimientoscajaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientoscajaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movimientoscaja.
     * @param {movimientoscajaUpsertArgs} args - Arguments to update or create a Movimientoscaja.
     * @example
     * // Update or create a Movimientoscaja
     * const movimientoscaja = await prisma.movimientoscaja.upsert({
     *   create: {
     *     // ... data to create a Movimientoscaja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movimientoscaja we want to update
     *   }
     * })
     */
    upsert<T extends movimientoscajaUpsertArgs>(args: SelectSubset<T, movimientoscajaUpsertArgs<ExtArgs>>): Prisma__movimientoscajaClient<$Result.GetResult<Prisma.$movimientoscajaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movimientoscajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientoscajaCountArgs} args - Arguments to filter Movimientoscajas to count.
     * @example
     * // Count the number of Movimientoscajas
     * const count = await prisma.movimientoscaja.count({
     *   where: {
     *     // ... the filter for the Movimientoscajas we want to count
     *   }
     * })
    **/
    count<T extends movimientoscajaCountArgs>(
      args?: Subset<T, movimientoscajaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimientoscajaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movimientoscaja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoscajaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovimientoscajaAggregateArgs>(args: Subset<T, MovimientoscajaAggregateArgs>): Prisma.PrismaPromise<GetMovimientoscajaAggregateType<T>>

    /**
     * Group by Movimientoscaja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientoscajaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends movimientoscajaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movimientoscajaGroupByArgs['orderBy'] }
        : { orderBy?: movimientoscajaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, movimientoscajaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientoscajaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movimientoscaja model
   */
  readonly fields: movimientoscajaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movimientoscaja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movimientoscajaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends movimientoscaja$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, movimientoscaja$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the movimientoscaja model
   */
  interface movimientoscajaFieldRefs {
    readonly id_movimiento: FieldRef<"movimientoscaja", 'Int'>
    readonly tipo: FieldRef<"movimientoscaja", 'tipo_movimiento'>
    readonly prestamo_id: FieldRef<"movimientoscaja", 'Int'>
    readonly pago_id: FieldRef<"movimientoscaja", 'Int'>
    readonly descripcion: FieldRef<"movimientoscaja", 'String'>
    readonly monto: FieldRef<"movimientoscaja", 'Decimal'>
    readonly fecha: FieldRef<"movimientoscaja", 'DateTime'>
    readonly usuario_id: FieldRef<"movimientoscaja", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * movimientoscaja findUnique
   */
  export type movimientoscajaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientoscaja
     */
    select?: movimientoscajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientoscaja
     */
    omit?: movimientoscajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoscajaInclude<ExtArgs> | null
    /**
     * Filter, which movimientoscaja to fetch.
     */
    where: movimientoscajaWhereUniqueInput
  }

  /**
   * movimientoscaja findUniqueOrThrow
   */
  export type movimientoscajaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientoscaja
     */
    select?: movimientoscajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientoscaja
     */
    omit?: movimientoscajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoscajaInclude<ExtArgs> | null
    /**
     * Filter, which movimientoscaja to fetch.
     */
    where: movimientoscajaWhereUniqueInput
  }

  /**
   * movimientoscaja findFirst
   */
  export type movimientoscajaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientoscaja
     */
    select?: movimientoscajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientoscaja
     */
    omit?: movimientoscajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoscajaInclude<ExtArgs> | null
    /**
     * Filter, which movimientoscaja to fetch.
     */
    where?: movimientoscajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientoscajas to fetch.
     */
    orderBy?: movimientoscajaOrderByWithRelationInput | movimientoscajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movimientoscajas.
     */
    cursor?: movimientoscajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientoscajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientoscajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movimientoscajas.
     */
    distinct?: MovimientoscajaScalarFieldEnum | MovimientoscajaScalarFieldEnum[]
  }

  /**
   * movimientoscaja findFirstOrThrow
   */
  export type movimientoscajaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientoscaja
     */
    select?: movimientoscajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientoscaja
     */
    omit?: movimientoscajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoscajaInclude<ExtArgs> | null
    /**
     * Filter, which movimientoscaja to fetch.
     */
    where?: movimientoscajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientoscajas to fetch.
     */
    orderBy?: movimientoscajaOrderByWithRelationInput | movimientoscajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movimientoscajas.
     */
    cursor?: movimientoscajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientoscajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientoscajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movimientoscajas.
     */
    distinct?: MovimientoscajaScalarFieldEnum | MovimientoscajaScalarFieldEnum[]
  }

  /**
   * movimientoscaja findMany
   */
  export type movimientoscajaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientoscaja
     */
    select?: movimientoscajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientoscaja
     */
    omit?: movimientoscajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoscajaInclude<ExtArgs> | null
    /**
     * Filter, which movimientoscajas to fetch.
     */
    where?: movimientoscajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movimientoscajas to fetch.
     */
    orderBy?: movimientoscajaOrderByWithRelationInput | movimientoscajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movimientoscajas.
     */
    cursor?: movimientoscajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movimientoscajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movimientoscajas.
     */
    skip?: number
    distinct?: MovimientoscajaScalarFieldEnum | MovimientoscajaScalarFieldEnum[]
  }

  /**
   * movimientoscaja create
   */
  export type movimientoscajaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientoscaja
     */
    select?: movimientoscajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientoscaja
     */
    omit?: movimientoscajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoscajaInclude<ExtArgs> | null
    /**
     * The data needed to create a movimientoscaja.
     */
    data: XOR<movimientoscajaCreateInput, movimientoscajaUncheckedCreateInput>
  }

  /**
   * movimientoscaja createMany
   */
  export type movimientoscajaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movimientoscajas.
     */
    data: movimientoscajaCreateManyInput | movimientoscajaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movimientoscaja createManyAndReturn
   */
  export type movimientoscajaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientoscaja
     */
    select?: movimientoscajaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movimientoscaja
     */
    omit?: movimientoscajaOmit<ExtArgs> | null
    /**
     * The data used to create many movimientoscajas.
     */
    data: movimientoscajaCreateManyInput | movimientoscajaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoscajaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * movimientoscaja update
   */
  export type movimientoscajaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientoscaja
     */
    select?: movimientoscajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientoscaja
     */
    omit?: movimientoscajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoscajaInclude<ExtArgs> | null
    /**
     * The data needed to update a movimientoscaja.
     */
    data: XOR<movimientoscajaUpdateInput, movimientoscajaUncheckedUpdateInput>
    /**
     * Choose, which movimientoscaja to update.
     */
    where: movimientoscajaWhereUniqueInput
  }

  /**
   * movimientoscaja updateMany
   */
  export type movimientoscajaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movimientoscajas.
     */
    data: XOR<movimientoscajaUpdateManyMutationInput, movimientoscajaUncheckedUpdateManyInput>
    /**
     * Filter which movimientoscajas to update
     */
    where?: movimientoscajaWhereInput
    /**
     * Limit how many movimientoscajas to update.
     */
    limit?: number
  }

  /**
   * movimientoscaja updateManyAndReturn
   */
  export type movimientoscajaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientoscaja
     */
    select?: movimientoscajaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movimientoscaja
     */
    omit?: movimientoscajaOmit<ExtArgs> | null
    /**
     * The data used to update movimientoscajas.
     */
    data: XOR<movimientoscajaUpdateManyMutationInput, movimientoscajaUncheckedUpdateManyInput>
    /**
     * Filter which movimientoscajas to update
     */
    where?: movimientoscajaWhereInput
    /**
     * Limit how many movimientoscajas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoscajaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * movimientoscaja upsert
   */
  export type movimientoscajaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientoscaja
     */
    select?: movimientoscajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientoscaja
     */
    omit?: movimientoscajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoscajaInclude<ExtArgs> | null
    /**
     * The filter to search for the movimientoscaja to update in case it exists.
     */
    where: movimientoscajaWhereUniqueInput
    /**
     * In case the movimientoscaja found by the `where` argument doesn't exist, create a new movimientoscaja with this data.
     */
    create: XOR<movimientoscajaCreateInput, movimientoscajaUncheckedCreateInput>
    /**
     * In case the movimientoscaja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movimientoscajaUpdateInput, movimientoscajaUncheckedUpdateInput>
  }

  /**
   * movimientoscaja delete
   */
  export type movimientoscajaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientoscaja
     */
    select?: movimientoscajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientoscaja
     */
    omit?: movimientoscajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoscajaInclude<ExtArgs> | null
    /**
     * Filter which movimientoscaja to delete.
     */
    where: movimientoscajaWhereUniqueInput
  }

  /**
   * movimientoscaja deleteMany
   */
  export type movimientoscajaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movimientoscajas to delete
     */
    where?: movimientoscajaWhereInput
    /**
     * Limit how many movimientoscajas to delete.
     */
    limit?: number
  }

  /**
   * movimientoscaja.usuarios
   */
  export type movimientoscaja$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * movimientoscaja without action
   */
  export type movimientoscajaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientoscaja
     */
    select?: movimientoscajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientoscaja
     */
    omit?: movimientoscajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoscajaInclude<ExtArgs> | null
  }


  /**
   * Model pagos
   */

  export type AggregatePagos = {
    _count: PagosCountAggregateOutputType | null
    _avg: PagosAvgAggregateOutputType | null
    _sum: PagosSumAggregateOutputType | null
    _min: PagosMinAggregateOutputType | null
    _max: PagosMaxAggregateOutputType | null
  }

  export type PagosAvgAggregateOutputType = {
    id_pago: number | null
    id_cuota: number | null
    monto_pagado: Decimal | null
    recibo_numero: number | null
    cobrador_id: number | null
  }

  export type PagosSumAggregateOutputType = {
    id_pago: number | null
    id_cuota: number | null
    monto_pagado: Decimal | null
    recibo_numero: number | null
    cobrador_id: number | null
  }

  export type PagosMinAggregateOutputType = {
    id_pago: number | null
    id_cuota: number | null
    fecha_pago: Date | null
    monto_pagado: Decimal | null
    forma_pago: $Enums.forma_pago | null
    recibo_numero: number | null
    cobrador_id: number | null
    observaciones: string | null
  }

  export type PagosMaxAggregateOutputType = {
    id_pago: number | null
    id_cuota: number | null
    fecha_pago: Date | null
    monto_pagado: Decimal | null
    forma_pago: $Enums.forma_pago | null
    recibo_numero: number | null
    cobrador_id: number | null
    observaciones: string | null
  }

  export type PagosCountAggregateOutputType = {
    id_pago: number
    id_cuota: number
    fecha_pago: number
    monto_pagado: number
    forma_pago: number
    recibo_numero: number
    cobrador_id: number
    observaciones: number
    _all: number
  }


  export type PagosAvgAggregateInputType = {
    id_pago?: true
    id_cuota?: true
    monto_pagado?: true
    recibo_numero?: true
    cobrador_id?: true
  }

  export type PagosSumAggregateInputType = {
    id_pago?: true
    id_cuota?: true
    monto_pagado?: true
    recibo_numero?: true
    cobrador_id?: true
  }

  export type PagosMinAggregateInputType = {
    id_pago?: true
    id_cuota?: true
    fecha_pago?: true
    monto_pagado?: true
    forma_pago?: true
    recibo_numero?: true
    cobrador_id?: true
    observaciones?: true
  }

  export type PagosMaxAggregateInputType = {
    id_pago?: true
    id_cuota?: true
    fecha_pago?: true
    monto_pagado?: true
    forma_pago?: true
    recibo_numero?: true
    cobrador_id?: true
    observaciones?: true
  }

  export type PagosCountAggregateInputType = {
    id_pago?: true
    id_cuota?: true
    fecha_pago?: true
    monto_pagado?: true
    forma_pago?: true
    recibo_numero?: true
    cobrador_id?: true
    observaciones?: true
    _all?: true
  }

  export type PagosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagos to aggregate.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagos
    **/
    _count?: true | PagosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagosMaxAggregateInputType
  }

  export type GetPagosAggregateType<T extends PagosAggregateArgs> = {
        [P in keyof T & keyof AggregatePagos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagos[P]>
      : GetScalarType<T[P], AggregatePagos[P]>
  }




  export type pagosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagosWhereInput
    orderBy?: pagosOrderByWithAggregationInput | pagosOrderByWithAggregationInput[]
    by: PagosScalarFieldEnum[] | PagosScalarFieldEnum
    having?: pagosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagosCountAggregateInputType | true
    _avg?: PagosAvgAggregateInputType
    _sum?: PagosSumAggregateInputType
    _min?: PagosMinAggregateInputType
    _max?: PagosMaxAggregateInputType
  }

  export type PagosGroupByOutputType = {
    id_pago: number
    id_cuota: number
    fecha_pago: Date
    monto_pagado: Decimal
    forma_pago: $Enums.forma_pago | null
    recibo_numero: number | null
    cobrador_id: number | null
    observaciones: string | null
    _count: PagosCountAggregateOutputType | null
    _avg: PagosAvgAggregateOutputType | null
    _sum: PagosSumAggregateOutputType | null
    _min: PagosMinAggregateOutputType | null
    _max: PagosMaxAggregateOutputType | null
  }

  type GetPagosGroupByPayload<T extends pagosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagosGroupByOutputType[P]>
            : GetScalarType<T[P], PagosGroupByOutputType[P]>
        }
      >
    >


  export type pagosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pago?: boolean
    id_cuota?: boolean
    fecha_pago?: boolean
    monto_pagado?: boolean
    forma_pago?: boolean
    recibo_numero?: boolean
    cobrador_id?: boolean
    observaciones?: boolean
    usuarios?: boolean | pagos$usuariosArgs<ExtArgs>
    cuotas?: boolean | cuotasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagos"]>

  export type pagosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pago?: boolean
    id_cuota?: boolean
    fecha_pago?: boolean
    monto_pagado?: boolean
    forma_pago?: boolean
    recibo_numero?: boolean
    cobrador_id?: boolean
    observaciones?: boolean
    usuarios?: boolean | pagos$usuariosArgs<ExtArgs>
    cuotas?: boolean | cuotasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagos"]>

  export type pagosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pago?: boolean
    id_cuota?: boolean
    fecha_pago?: boolean
    monto_pagado?: boolean
    forma_pago?: boolean
    recibo_numero?: boolean
    cobrador_id?: boolean
    observaciones?: boolean
    usuarios?: boolean | pagos$usuariosArgs<ExtArgs>
    cuotas?: boolean | cuotasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagos"]>

  export type pagosSelectScalar = {
    id_pago?: boolean
    id_cuota?: boolean
    fecha_pago?: boolean
    monto_pagado?: boolean
    forma_pago?: boolean
    recibo_numero?: boolean
    cobrador_id?: boolean
    observaciones?: boolean
  }

  export type pagosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pago" | "id_cuota" | "fecha_pago" | "monto_pagado" | "forma_pago" | "recibo_numero" | "cobrador_id" | "observaciones", ExtArgs["result"]["pagos"]>
  export type pagosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | pagos$usuariosArgs<ExtArgs>
    cuotas?: boolean | cuotasDefaultArgs<ExtArgs>
  }
  export type pagosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | pagos$usuariosArgs<ExtArgs>
    cuotas?: boolean | cuotasDefaultArgs<ExtArgs>
  }
  export type pagosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | pagos$usuariosArgs<ExtArgs>
    cuotas?: boolean | cuotasDefaultArgs<ExtArgs>
  }

  export type $pagosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pagos"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs> | null
      cuotas: Prisma.$cuotasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pago: number
      id_cuota: number
      fecha_pago: Date
      monto_pagado: Prisma.Decimal
      forma_pago: $Enums.forma_pago | null
      recibo_numero: number | null
      cobrador_id: number | null
      observaciones: string | null
    }, ExtArgs["result"]["pagos"]>
    composites: {}
  }

  type pagosGetPayload<S extends boolean | null | undefined | pagosDefaultArgs> = $Result.GetResult<Prisma.$pagosPayload, S>

  type pagosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pagosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagosCountAggregateInputType | true
    }

  export interface pagosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pagos'], meta: { name: 'pagos' } }
    /**
     * Find zero or one Pagos that matches the filter.
     * @param {pagosFindUniqueArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagosFindUniqueArgs>(args: SelectSubset<T, pagosFindUniqueArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pagosFindUniqueOrThrowArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagosFindUniqueOrThrowArgs>(args: SelectSubset<T, pagosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindFirstArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagosFindFirstArgs>(args?: SelectSubset<T, pagosFindFirstArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindFirstOrThrowArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagosFindFirstOrThrowArgs>(args?: SelectSubset<T, pagosFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pagos.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pagos.findMany({ take: 10 })
     * 
     * // Only select the `id_pago`
     * const pagosWithId_pagoOnly = await prisma.pagos.findMany({ select: { id_pago: true } })
     * 
     */
    findMany<T extends pagosFindManyArgs>(args?: SelectSubset<T, pagosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagos.
     * @param {pagosCreateArgs} args - Arguments to create a Pagos.
     * @example
     * // Create one Pagos
     * const Pagos = await prisma.pagos.create({
     *   data: {
     *     // ... data to create a Pagos
     *   }
     * })
     * 
     */
    create<T extends pagosCreateArgs>(args: SelectSubset<T, pagosCreateArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagos.
     * @param {pagosCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pagos = await prisma.pagos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagosCreateManyArgs>(args?: SelectSubset<T, pagosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagos and returns the data saved in the database.
     * @param {pagosCreateManyAndReturnArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pagos = await prisma.pagos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagos and only return the `id_pago`
     * const pagosWithId_pagoOnly = await prisma.pagos.createManyAndReturn({
     *   select: { id_pago: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pagosCreateManyAndReturnArgs>(args?: SelectSubset<T, pagosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagos.
     * @param {pagosDeleteArgs} args - Arguments to delete one Pagos.
     * @example
     * // Delete one Pagos
     * const Pagos = await prisma.pagos.delete({
     *   where: {
     *     // ... filter to delete one Pagos
     *   }
     * })
     * 
     */
    delete<T extends pagosDeleteArgs>(args: SelectSubset<T, pagosDeleteArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagos.
     * @param {pagosUpdateArgs} args - Arguments to update one Pagos.
     * @example
     * // Update one Pagos
     * const pagos = await prisma.pagos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagosUpdateArgs>(args: SelectSubset<T, pagosUpdateArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagos.
     * @param {pagosDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pagos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagosDeleteManyArgs>(args?: SelectSubset<T, pagosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pagos = await prisma.pagos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagosUpdateManyArgs>(args: SelectSubset<T, pagosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos and returns the data updated in the database.
     * @param {pagosUpdateManyAndReturnArgs} args - Arguments to update many Pagos.
     * @example
     * // Update many Pagos
     * const pagos = await prisma.pagos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagos and only return the `id_pago`
     * const pagosWithId_pagoOnly = await prisma.pagos.updateManyAndReturn({
     *   select: { id_pago: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pagosUpdateManyAndReturnArgs>(args: SelectSubset<T, pagosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagos.
     * @param {pagosUpsertArgs} args - Arguments to update or create a Pagos.
     * @example
     * // Update or create a Pagos
     * const pagos = await prisma.pagos.upsert({
     *   create: {
     *     // ... data to create a Pagos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagos we want to update
     *   }
     * })
     */
    upsert<T extends pagosUpsertArgs>(args: SelectSubset<T, pagosUpsertArgs<ExtArgs>>): Prisma__pagosClient<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pagos.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends pagosCountArgs>(
      args?: Subset<T, pagosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagosAggregateArgs>(args: Subset<T, PagosAggregateArgs>): Prisma.PrismaPromise<GetPagosAggregateType<T>>

    /**
     * Group by Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pagosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagosGroupByArgs['orderBy'] }
        : { orderBy?: pagosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pagosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pagos model
   */
  readonly fields: pagosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pagos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends pagos$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, pagos$usuariosArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cuotas<T extends cuotasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cuotasDefaultArgs<ExtArgs>>): Prisma__cuotasClient<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pagos model
   */
  interface pagosFieldRefs {
    readonly id_pago: FieldRef<"pagos", 'Int'>
    readonly id_cuota: FieldRef<"pagos", 'Int'>
    readonly fecha_pago: FieldRef<"pagos", 'DateTime'>
    readonly monto_pagado: FieldRef<"pagos", 'Decimal'>
    readonly forma_pago: FieldRef<"pagos", 'forma_pago'>
    readonly recibo_numero: FieldRef<"pagos", 'Int'>
    readonly cobrador_id: FieldRef<"pagos", 'Int'>
    readonly observaciones: FieldRef<"pagos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pagos findUnique
   */
  export type pagosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos findUniqueOrThrow
   */
  export type pagosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos findFirst
   */
  export type pagosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * pagos findFirstOrThrow
   */
  export type pagosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * pagos findMany
   */
  export type pagosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * pagos create
   */
  export type pagosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * The data needed to create a pagos.
     */
    data: XOR<pagosCreateInput, pagosUncheckedCreateInput>
  }

  /**
   * pagos createMany
   */
  export type pagosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagos.
     */
    data: pagosCreateManyInput | pagosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pagos createManyAndReturn
   */
  export type pagosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * The data used to create many pagos.
     */
    data: pagosCreateManyInput | pagosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pagos update
   */
  export type pagosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * The data needed to update a pagos.
     */
    data: XOR<pagosUpdateInput, pagosUncheckedUpdateInput>
    /**
     * Choose, which pagos to update.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos updateMany
   */
  export type pagosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagos.
     */
    data: XOR<pagosUpdateManyMutationInput, pagosUncheckedUpdateManyInput>
    /**
     * Filter which pagos to update
     */
    where?: pagosWhereInput
    /**
     * Limit how many pagos to update.
     */
    limit?: number
  }

  /**
   * pagos updateManyAndReturn
   */
  export type pagosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * The data used to update pagos.
     */
    data: XOR<pagosUpdateManyMutationInput, pagosUncheckedUpdateManyInput>
    /**
     * Filter which pagos to update
     */
    where?: pagosWhereInput
    /**
     * Limit how many pagos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pagos upsert
   */
  export type pagosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * The filter to search for the pagos to update in case it exists.
     */
    where: pagosWhereUniqueInput
    /**
     * In case the pagos found by the `where` argument doesn't exist, create a new pagos with this data.
     */
    create: XOR<pagosCreateInput, pagosUncheckedCreateInput>
    /**
     * In case the pagos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagosUpdateInput, pagosUncheckedUpdateInput>
  }

  /**
   * pagos delete
   */
  export type pagosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    /**
     * Filter which pagos to delete.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos deleteMany
   */
  export type pagosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagos to delete
     */
    where?: pagosWhereInput
    /**
     * Limit how many pagos to delete.
     */
    limit?: number
  }

  /**
   * pagos.usuarios
   */
  export type pagos$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
  }

  /**
   * pagos without action
   */
  export type pagosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
  }


  /**
   * Model prestamos
   */

  export type AggregatePrestamos = {
    _count: PrestamosCountAggregateOutputType | null
    _avg: PrestamosAvgAggregateOutputType | null
    _sum: PrestamosSumAggregateOutputType | null
    _min: PrestamosMinAggregateOutputType | null
    _max: PrestamosMaxAggregateOutputType | null
  }

  export type PrestamosAvgAggregateOutputType = {
    id_prestamo: number | null
    id_cliente: number | null
    monto: Decimal | null
    interes: Decimal | null
    total_pagado: Decimal | null
    id_usuario: number | null
    cant_cuotas: number | null
  }

  export type PrestamosSumAggregateOutputType = {
    id_prestamo: number | null
    id_cliente: number | null
    monto: Decimal | null
    interes: Decimal | null
    total_pagado: Decimal | null
    id_usuario: number | null
    cant_cuotas: number | null
  }

  export type PrestamosMinAggregateOutputType = {
    id_prestamo: number | null
    id_cliente: number | null
    monto: Decimal | null
    interes: Decimal | null
    total_pagado: Decimal | null
    tipo_interes: $Enums.tipo_interes | null
    id_usuario: number | null
    cant_cuotas: number | null
    frecuencia_pago: $Enums.frecuencia_pago | null
    fecha_inicio: Date | null
    fecha_vencimiento: Date | null
    estado: $Enums.estado_prestamo | null
    notas: string | null
  }

  export type PrestamosMaxAggregateOutputType = {
    id_prestamo: number | null
    id_cliente: number | null
    monto: Decimal | null
    interes: Decimal | null
    total_pagado: Decimal | null
    tipo_interes: $Enums.tipo_interes | null
    id_usuario: number | null
    cant_cuotas: number | null
    frecuencia_pago: $Enums.frecuencia_pago | null
    fecha_inicio: Date | null
    fecha_vencimiento: Date | null
    estado: $Enums.estado_prestamo | null
    notas: string | null
  }

  export type PrestamosCountAggregateOutputType = {
    id_prestamo: number
    id_cliente: number
    monto: number
    interes: number
    total_pagado: number
    tipo_interes: number
    id_usuario: number
    cant_cuotas: number
    frecuencia_pago: number
    fecha_inicio: number
    fecha_vencimiento: number
    estado: number
    notas: number
    _all: number
  }


  export type PrestamosAvgAggregateInputType = {
    id_prestamo?: true
    id_cliente?: true
    monto?: true
    interes?: true
    total_pagado?: true
    id_usuario?: true
    cant_cuotas?: true
  }

  export type PrestamosSumAggregateInputType = {
    id_prestamo?: true
    id_cliente?: true
    monto?: true
    interes?: true
    total_pagado?: true
    id_usuario?: true
    cant_cuotas?: true
  }

  export type PrestamosMinAggregateInputType = {
    id_prestamo?: true
    id_cliente?: true
    monto?: true
    interes?: true
    total_pagado?: true
    tipo_interes?: true
    id_usuario?: true
    cant_cuotas?: true
    frecuencia_pago?: true
    fecha_inicio?: true
    fecha_vencimiento?: true
    estado?: true
    notas?: true
  }

  export type PrestamosMaxAggregateInputType = {
    id_prestamo?: true
    id_cliente?: true
    monto?: true
    interes?: true
    total_pagado?: true
    tipo_interes?: true
    id_usuario?: true
    cant_cuotas?: true
    frecuencia_pago?: true
    fecha_inicio?: true
    fecha_vencimiento?: true
    estado?: true
    notas?: true
  }

  export type PrestamosCountAggregateInputType = {
    id_prestamo?: true
    id_cliente?: true
    monto?: true
    interes?: true
    total_pagado?: true
    tipo_interes?: true
    id_usuario?: true
    cant_cuotas?: true
    frecuencia_pago?: true
    fecha_inicio?: true
    fecha_vencimiento?: true
    estado?: true
    notas?: true
    _all?: true
  }

  export type PrestamosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prestamos to aggregate.
     */
    where?: prestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamosOrderByWithRelationInput | prestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prestamos
    **/
    _count?: true | PrestamosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrestamosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrestamosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrestamosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrestamosMaxAggregateInputType
  }

  export type GetPrestamosAggregateType<T extends PrestamosAggregateArgs> = {
        [P in keyof T & keyof AggregatePrestamos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrestamos[P]>
      : GetScalarType<T[P], AggregatePrestamos[P]>
  }




  export type prestamosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prestamosWhereInput
    orderBy?: prestamosOrderByWithAggregationInput | prestamosOrderByWithAggregationInput[]
    by: PrestamosScalarFieldEnum[] | PrestamosScalarFieldEnum
    having?: prestamosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrestamosCountAggregateInputType | true
    _avg?: PrestamosAvgAggregateInputType
    _sum?: PrestamosSumAggregateInputType
    _min?: PrestamosMinAggregateInputType
    _max?: PrestamosMaxAggregateInputType
  }

  export type PrestamosGroupByOutputType = {
    id_prestamo: number
    id_cliente: number
    monto: Decimal
    interes: Decimal
    total_pagado: Decimal | null
    tipo_interes: $Enums.tipo_interes | null
    id_usuario: number
    cant_cuotas: number
    frecuencia_pago: $Enums.frecuencia_pago
    fecha_inicio: Date
    fecha_vencimiento: Date
    estado: $Enums.estado_prestamo | null
    notas: string | null
    _count: PrestamosCountAggregateOutputType | null
    _avg: PrestamosAvgAggregateOutputType | null
    _sum: PrestamosSumAggregateOutputType | null
    _min: PrestamosMinAggregateOutputType | null
    _max: PrestamosMaxAggregateOutputType | null
  }

  type GetPrestamosGroupByPayload<T extends prestamosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrestamosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrestamosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrestamosGroupByOutputType[P]>
            : GetScalarType<T[P], PrestamosGroupByOutputType[P]>
        }
      >
    >


  export type prestamosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    id_cliente?: boolean
    monto?: boolean
    interes?: boolean
    total_pagado?: boolean
    tipo_interes?: boolean
    id_usuario?: boolean
    cant_cuotas?: boolean
    frecuencia_pago?: boolean
    fecha_inicio?: boolean
    fecha_vencimiento?: boolean
    estado?: boolean
    notas?: boolean
    cuotas?: boolean | prestamos$cuotasArgs<ExtArgs>
    clientes?: boolean | clientesDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    _count?: boolean | PrestamosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamos"]>

  export type prestamosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    id_cliente?: boolean
    monto?: boolean
    interes?: boolean
    total_pagado?: boolean
    tipo_interes?: boolean
    id_usuario?: boolean
    cant_cuotas?: boolean
    frecuencia_pago?: boolean
    fecha_inicio?: boolean
    fecha_vencimiento?: boolean
    estado?: boolean
    notas?: boolean
    clientes?: boolean | clientesDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamos"]>

  export type prestamosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    id_cliente?: boolean
    monto?: boolean
    interes?: boolean
    total_pagado?: boolean
    tipo_interes?: boolean
    id_usuario?: boolean
    cant_cuotas?: boolean
    frecuencia_pago?: boolean
    fecha_inicio?: boolean
    fecha_vencimiento?: boolean
    estado?: boolean
    notas?: boolean
    clientes?: boolean | clientesDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamos"]>

  export type prestamosSelectScalar = {
    id_prestamo?: boolean
    id_cliente?: boolean
    monto?: boolean
    interes?: boolean
    total_pagado?: boolean
    tipo_interes?: boolean
    id_usuario?: boolean
    cant_cuotas?: boolean
    frecuencia_pago?: boolean
    fecha_inicio?: boolean
    fecha_vencimiento?: boolean
    estado?: boolean
    notas?: boolean
  }

  export type prestamosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prestamo" | "id_cliente" | "monto" | "interes" | "total_pagado" | "tipo_interes" | "id_usuario" | "cant_cuotas" | "frecuencia_pago" | "fecha_inicio" | "fecha_vencimiento" | "estado" | "notas", ExtArgs["result"]["prestamos"]>
  export type prestamosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cuotas?: boolean | prestamos$cuotasArgs<ExtArgs>
    clientes?: boolean | clientesDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    _count?: boolean | PrestamosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type prestamosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | clientesDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type prestamosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | clientesDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $prestamosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prestamos"
    objects: {
      cuotas: Prisma.$cuotasPayload<ExtArgs>[]
      clientes: Prisma.$clientesPayload<ExtArgs>
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prestamo: number
      id_cliente: number
      monto: Prisma.Decimal
      interes: Prisma.Decimal
      total_pagado: Prisma.Decimal | null
      tipo_interes: $Enums.tipo_interes | null
      id_usuario: number
      cant_cuotas: number
      frecuencia_pago: $Enums.frecuencia_pago
      fecha_inicio: Date
      fecha_vencimiento: Date
      estado: $Enums.estado_prestamo | null
      notas: string | null
    }, ExtArgs["result"]["prestamos"]>
    composites: {}
  }

  type prestamosGetPayload<S extends boolean | null | undefined | prestamosDefaultArgs> = $Result.GetResult<Prisma.$prestamosPayload, S>

  type prestamosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prestamosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrestamosCountAggregateInputType | true
    }

  export interface prestamosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prestamos'], meta: { name: 'prestamos' } }
    /**
     * Find zero or one Prestamos that matches the filter.
     * @param {prestamosFindUniqueArgs} args - Arguments to find a Prestamos
     * @example
     * // Get one Prestamos
     * const prestamos = await prisma.prestamos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prestamosFindUniqueArgs>(args: SelectSubset<T, prestamosFindUniqueArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prestamos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prestamosFindUniqueOrThrowArgs} args - Arguments to find a Prestamos
     * @example
     * // Get one Prestamos
     * const prestamos = await prisma.prestamos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prestamosFindUniqueOrThrowArgs>(args: SelectSubset<T, prestamosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamosFindFirstArgs} args - Arguments to find a Prestamos
     * @example
     * // Get one Prestamos
     * const prestamos = await prisma.prestamos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prestamosFindFirstArgs>(args?: SelectSubset<T, prestamosFindFirstArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestamos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamosFindFirstOrThrowArgs} args - Arguments to find a Prestamos
     * @example
     * // Get one Prestamos
     * const prestamos = await prisma.prestamos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prestamosFindFirstOrThrowArgs>(args?: SelectSubset<T, prestamosFindFirstOrThrowArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prestamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prestamos
     * const prestamos = await prisma.prestamos.findMany()
     * 
     * // Get first 10 Prestamos
     * const prestamos = await prisma.prestamos.findMany({ take: 10 })
     * 
     * // Only select the `id_prestamo`
     * const prestamosWithId_prestamoOnly = await prisma.prestamos.findMany({ select: { id_prestamo: true } })
     * 
     */
    findMany<T extends prestamosFindManyArgs>(args?: SelectSubset<T, prestamosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prestamos.
     * @param {prestamosCreateArgs} args - Arguments to create a Prestamos.
     * @example
     * // Create one Prestamos
     * const Prestamos = await prisma.prestamos.create({
     *   data: {
     *     // ... data to create a Prestamos
     *   }
     * })
     * 
     */
    create<T extends prestamosCreateArgs>(args: SelectSubset<T, prestamosCreateArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prestamos.
     * @param {prestamosCreateManyArgs} args - Arguments to create many Prestamos.
     * @example
     * // Create many Prestamos
     * const prestamos = await prisma.prestamos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prestamosCreateManyArgs>(args?: SelectSubset<T, prestamosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prestamos and returns the data saved in the database.
     * @param {prestamosCreateManyAndReturnArgs} args - Arguments to create many Prestamos.
     * @example
     * // Create many Prestamos
     * const prestamos = await prisma.prestamos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prestamos and only return the `id_prestamo`
     * const prestamosWithId_prestamoOnly = await prisma.prestamos.createManyAndReturn({
     *   select: { id_prestamo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prestamosCreateManyAndReturnArgs>(args?: SelectSubset<T, prestamosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prestamos.
     * @param {prestamosDeleteArgs} args - Arguments to delete one Prestamos.
     * @example
     * // Delete one Prestamos
     * const Prestamos = await prisma.prestamos.delete({
     *   where: {
     *     // ... filter to delete one Prestamos
     *   }
     * })
     * 
     */
    delete<T extends prestamosDeleteArgs>(args: SelectSubset<T, prestamosDeleteArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prestamos.
     * @param {prestamosUpdateArgs} args - Arguments to update one Prestamos.
     * @example
     * // Update one Prestamos
     * const prestamos = await prisma.prestamos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prestamosUpdateArgs>(args: SelectSubset<T, prestamosUpdateArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prestamos.
     * @param {prestamosDeleteManyArgs} args - Arguments to filter Prestamos to delete.
     * @example
     * // Delete a few Prestamos
     * const { count } = await prisma.prestamos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prestamosDeleteManyArgs>(args?: SelectSubset<T, prestamosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prestamos
     * const prestamos = await prisma.prestamos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prestamosUpdateManyArgs>(args: SelectSubset<T, prestamosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestamos and returns the data updated in the database.
     * @param {prestamosUpdateManyAndReturnArgs} args - Arguments to update many Prestamos.
     * @example
     * // Update many Prestamos
     * const prestamos = await prisma.prestamos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prestamos and only return the `id_prestamo`
     * const prestamosWithId_prestamoOnly = await prisma.prestamos.updateManyAndReturn({
     *   select: { id_prestamo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prestamosUpdateManyAndReturnArgs>(args: SelectSubset<T, prestamosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prestamos.
     * @param {prestamosUpsertArgs} args - Arguments to update or create a Prestamos.
     * @example
     * // Update or create a Prestamos
     * const prestamos = await prisma.prestamos.upsert({
     *   create: {
     *     // ... data to create a Prestamos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prestamos we want to update
     *   }
     * })
     */
    upsert<T extends prestamosUpsertArgs>(args: SelectSubset<T, prestamosUpsertArgs<ExtArgs>>): Prisma__prestamosClient<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamosCountArgs} args - Arguments to filter Prestamos to count.
     * @example
     * // Count the number of Prestamos
     * const count = await prisma.prestamos.count({
     *   where: {
     *     // ... the filter for the Prestamos we want to count
     *   }
     * })
    **/
    count<T extends prestamosCountArgs>(
      args?: Subset<T, prestamosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrestamosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrestamosAggregateArgs>(args: Subset<T, PrestamosAggregateArgs>): Prisma.PrismaPromise<GetPrestamosAggregateType<T>>

    /**
     * Group by Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends prestamosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prestamosGroupByArgs['orderBy'] }
        : { orderBy?: prestamosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, prestamosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestamosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prestamos model
   */
  readonly fields: prestamosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prestamos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prestamosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cuotas<T extends prestamos$cuotasArgs<ExtArgs> = {}>(args?: Subset<T, prestamos$cuotasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cuotasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clientes<T extends clientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientesDefaultArgs<ExtArgs>>): Prisma__clientesClient<$Result.GetResult<Prisma.$clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the prestamos model
   */
  interface prestamosFieldRefs {
    readonly id_prestamo: FieldRef<"prestamos", 'Int'>
    readonly id_cliente: FieldRef<"prestamos", 'Int'>
    readonly monto: FieldRef<"prestamos", 'Decimal'>
    readonly interes: FieldRef<"prestamos", 'Decimal'>
    readonly total_pagado: FieldRef<"prestamos", 'Decimal'>
    readonly tipo_interes: FieldRef<"prestamos", 'tipo_interes'>
    readonly id_usuario: FieldRef<"prestamos", 'Int'>
    readonly cant_cuotas: FieldRef<"prestamos", 'Int'>
    readonly frecuencia_pago: FieldRef<"prestamos", 'frecuencia_pago'>
    readonly fecha_inicio: FieldRef<"prestamos", 'DateTime'>
    readonly fecha_vencimiento: FieldRef<"prestamos", 'DateTime'>
    readonly estado: FieldRef<"prestamos", 'estado_prestamo'>
    readonly notas: FieldRef<"prestamos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * prestamos findUnique
   */
  export type prestamosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * Filter, which prestamos to fetch.
     */
    where: prestamosWhereUniqueInput
  }

  /**
   * prestamos findUniqueOrThrow
   */
  export type prestamosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * Filter, which prestamos to fetch.
     */
    where: prestamosWhereUniqueInput
  }

  /**
   * prestamos findFirst
   */
  export type prestamosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * Filter, which prestamos to fetch.
     */
    where?: prestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamosOrderByWithRelationInput | prestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prestamos.
     */
    cursor?: prestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prestamos.
     */
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * prestamos findFirstOrThrow
   */
  export type prestamosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * Filter, which prestamos to fetch.
     */
    where?: prestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamosOrderByWithRelationInput | prestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prestamos.
     */
    cursor?: prestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prestamos.
     */
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * prestamos findMany
   */
  export type prestamosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * Filter, which prestamos to fetch.
     */
    where?: prestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamosOrderByWithRelationInput | prestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prestamos.
     */
    cursor?: prestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * prestamos create
   */
  export type prestamosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * The data needed to create a prestamos.
     */
    data: XOR<prestamosCreateInput, prestamosUncheckedCreateInput>
  }

  /**
   * prestamos createMany
   */
  export type prestamosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prestamos.
     */
    data: prestamosCreateManyInput | prestamosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prestamos createManyAndReturn
   */
  export type prestamosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * The data used to create many prestamos.
     */
    data: prestamosCreateManyInput | prestamosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * prestamos update
   */
  export type prestamosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * The data needed to update a prestamos.
     */
    data: XOR<prestamosUpdateInput, prestamosUncheckedUpdateInput>
    /**
     * Choose, which prestamos to update.
     */
    where: prestamosWhereUniqueInput
  }

  /**
   * prestamos updateMany
   */
  export type prestamosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prestamos.
     */
    data: XOR<prestamosUpdateManyMutationInput, prestamosUncheckedUpdateManyInput>
    /**
     * Filter which prestamos to update
     */
    where?: prestamosWhereInput
    /**
     * Limit how many prestamos to update.
     */
    limit?: number
  }

  /**
   * prestamos updateManyAndReturn
   */
  export type prestamosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * The data used to update prestamos.
     */
    data: XOR<prestamosUpdateManyMutationInput, prestamosUncheckedUpdateManyInput>
    /**
     * Filter which prestamos to update
     */
    where?: prestamosWhereInput
    /**
     * Limit how many prestamos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * prestamos upsert
   */
  export type prestamosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * The filter to search for the prestamos to update in case it exists.
     */
    where: prestamosWhereUniqueInput
    /**
     * In case the prestamos found by the `where` argument doesn't exist, create a new prestamos with this data.
     */
    create: XOR<prestamosCreateInput, prestamosUncheckedCreateInput>
    /**
     * In case the prestamos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prestamosUpdateInput, prestamosUncheckedUpdateInput>
  }

  /**
   * prestamos delete
   */
  export type prestamosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    /**
     * Filter which prestamos to delete.
     */
    where: prestamosWhereUniqueInput
  }

  /**
   * prestamos deleteMany
   */
  export type prestamosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prestamos to delete
     */
    where?: prestamosWhereInput
    /**
     * Limit how many prestamos to delete.
     */
    limit?: number
  }

  /**
   * prestamos.cuotas
   */
  export type prestamos$cuotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuotas
     */
    select?: cuotasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cuotas
     */
    omit?: cuotasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cuotasInclude<ExtArgs> | null
    where?: cuotasWhereInput
    orderBy?: cuotasOrderByWithRelationInput | cuotasOrderByWithRelationInput[]
    cursor?: cuotasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuotasScalarFieldEnum | CuotasScalarFieldEnum[]
  }

  /**
   * prestamos without action
   */
  export type prestamosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: number | null
    nombre_usuario: string | null
    clave_hash: string | null
    rol: $Enums.rol | null
    fecha_creacion: Date | null
    ultimo_acceso: Date | null
    fecha_baja: Date | null
    razon_baja: string | null
    estado: $Enums.estado_usuario | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: number | null
    nombre_usuario: string | null
    clave_hash: string | null
    rol: $Enums.rol | null
    fecha_creacion: Date | null
    ultimo_acceso: Date | null
    fecha_baja: Date | null
    razon_baja: string | null
    estado: $Enums.estado_usuario | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    nombre_usuario: number
    clave_hash: number
    rol: number
    fecha_creacion: number
    ultimo_acceso: number
    fecha_baja: number
    razon_baja: number
    estado: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    clave_hash?: true
    rol?: true
    fecha_creacion?: true
    ultimo_acceso?: true
    fecha_baja?: true
    razon_baja?: true
    estado?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    clave_hash?: true
    rol?: true
    fecha_creacion?: true
    ultimo_acceso?: true
    fecha_baja?: true
    razon_baja?: true
    estado?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    clave_hash?: true
    rol?: true
    fecha_creacion?: true
    ultimo_acceso?: true
    fecha_baja?: true
    razon_baja?: true
    estado?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: number
    nombre_usuario: string
    clave_hash: string
    rol: $Enums.rol
    fecha_creacion: Date | null
    ultimo_acceso: Date | null
    fecha_baja: Date | null
    razon_baja: string | null
    estado: $Enums.estado_usuario | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_usuario?: boolean
    clave_hash?: boolean
    rol?: boolean
    fecha_creacion?: boolean
    ultimo_acceso?: boolean
    fecha_baja?: boolean
    razon_baja?: boolean
    estado?: boolean
    logactividad?: boolean | usuarios$logactividadArgs<ExtArgs>
    movimientoscaja?: boolean | usuarios$movimientoscajaArgs<ExtArgs>
    pagos?: boolean | usuarios$pagosArgs<ExtArgs>
    prestamos?: boolean | usuarios$prestamosArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_usuario?: boolean
    clave_hash?: boolean
    rol?: boolean
    fecha_creacion?: boolean
    ultimo_acceso?: boolean
    fecha_baja?: boolean
    razon_baja?: boolean
    estado?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_usuario?: boolean
    clave_hash?: boolean
    rol?: boolean
    fecha_creacion?: boolean
    ultimo_acceso?: boolean
    fecha_baja?: boolean
    razon_baja?: boolean
    estado?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id_usuario?: boolean
    nombre_usuario?: boolean
    clave_hash?: boolean
    rol?: boolean
    fecha_creacion?: boolean
    ultimo_acceso?: boolean
    fecha_baja?: boolean
    razon_baja?: boolean
    estado?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre_usuario" | "clave_hash" | "rol" | "fecha_creacion" | "ultimo_acceso" | "fecha_baja" | "razon_baja" | "estado", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logactividad?: boolean | usuarios$logactividadArgs<ExtArgs>
    movimientoscaja?: boolean | usuarios$movimientoscajaArgs<ExtArgs>
    pagos?: boolean | usuarios$pagosArgs<ExtArgs>
    prestamos?: boolean | usuarios$prestamosArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      logactividad: Prisma.$logactividadPayload<ExtArgs>[]
      movimientoscaja: Prisma.$movimientoscajaPayload<ExtArgs>[]
      pagos: Prisma.$pagosPayload<ExtArgs>[]
      prestamos: Prisma.$prestamosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre_usuario: string
      clave_hash: string
      rol: $Enums.rol
      fecha_creacion: Date | null
      ultimo_acceso: Date | null
      fecha_baja: Date | null
      razon_baja: string | null
      estado: $Enums.estado_usuario | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logactividad<T extends usuarios$logactividadArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$logactividadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logactividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimientoscaja<T extends usuarios$movimientoscajaArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$movimientoscajaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$movimientoscajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagos<T extends usuarios$pagosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prestamos<T extends usuarios$prestamosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$prestamosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id_usuario: FieldRef<"usuarios", 'Int'>
    readonly nombre_usuario: FieldRef<"usuarios", 'String'>
    readonly clave_hash: FieldRef<"usuarios", 'String'>
    readonly rol: FieldRef<"usuarios", 'rol'>
    readonly fecha_creacion: FieldRef<"usuarios", 'DateTime'>
    readonly ultimo_acceso: FieldRef<"usuarios", 'DateTime'>
    readonly fecha_baja: FieldRef<"usuarios", 'DateTime'>
    readonly razon_baja: FieldRef<"usuarios", 'String'>
    readonly estado: FieldRef<"usuarios", 'estado_usuario'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.logactividad
   */
  export type usuarios$logactividadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logactividad
     */
    select?: logactividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logactividad
     */
    omit?: logactividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logactividadInclude<ExtArgs> | null
    where?: logactividadWhereInput
    orderBy?: logactividadOrderByWithRelationInput | logactividadOrderByWithRelationInput[]
    cursor?: logactividadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogactividadScalarFieldEnum | LogactividadScalarFieldEnum[]
  }

  /**
   * usuarios.movimientoscaja
   */
  export type usuarios$movimientoscajaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientoscaja
     */
    select?: movimientoscajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movimientoscaja
     */
    omit?: movimientoscajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: movimientoscajaInclude<ExtArgs> | null
    where?: movimientoscajaWhereInput
    orderBy?: movimientoscajaOrderByWithRelationInput | movimientoscajaOrderByWithRelationInput[]
    cursor?: movimientoscajaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoscajaScalarFieldEnum | MovimientoscajaScalarFieldEnum[]
  }

  /**
   * usuarios.pagos
   */
  export type usuarios$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pagos
     */
    omit?: pagosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagosInclude<ExtArgs> | null
    where?: pagosWhereInput
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    cursor?: pagosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * usuarios.prestamos
   */
  export type usuarios$prestamosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamos
     */
    select?: prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamos
     */
    omit?: prestamosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamosInclude<ExtArgs> | null
    where?: prestamosWhereInput
    orderBy?: prestamosOrderByWithRelationInput | prestamosOrderByWithRelationInput[]
    cursor?: prestamosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestamosScalarFieldEnum | PrestamosScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model datos_prestamos
   */

  export type AggregateDatos_prestamos = {
    _count: Datos_prestamosCountAggregateOutputType | null
    _avg: Datos_prestamosAvgAggregateOutputType | null
    _sum: Datos_prestamosSumAggregateOutputType | null
    _min: Datos_prestamosMinAggregateOutputType | null
    _max: Datos_prestamosMaxAggregateOutputType | null
  }

  export type Datos_prestamosAvgAggregateOutputType = {
    id_prestamo: number | null
    id_cliente: number | null
    monto: Decimal | null
    interes: Decimal | null
    cant_cuotas: number | null
  }

  export type Datos_prestamosSumAggregateOutputType = {
    id_prestamo: number | null
    id_cliente: number | null
    monto: Decimal | null
    interes: Decimal | null
    cant_cuotas: number | null
  }

  export type Datos_prestamosMinAggregateOutputType = {
    id_prestamo: number | null
    id_cliente: number | null
    nombre: string | null
    cedula: string | null
    telefono: string | null
    direccion: string | null
    foto_url: string | null
    monto: Decimal | null
    interes: Decimal | null
    cant_cuotas: number | null
    frecuencia_pago: $Enums.frecuencia_pago | null
    fecha_inicio: Date | null
    fecha_vencimiento: Date | null
    estado: $Enums.estado_prestamo | null
  }

  export type Datos_prestamosMaxAggregateOutputType = {
    id_prestamo: number | null
    id_cliente: number | null
    nombre: string | null
    cedula: string | null
    telefono: string | null
    direccion: string | null
    foto_url: string | null
    monto: Decimal | null
    interes: Decimal | null
    cant_cuotas: number | null
    frecuencia_pago: $Enums.frecuencia_pago | null
    fecha_inicio: Date | null
    fecha_vencimiento: Date | null
    estado: $Enums.estado_prestamo | null
  }

  export type Datos_prestamosCountAggregateOutputType = {
    id_prestamo: number
    id_cliente: number
    nombre: number
    cedula: number
    telefono: number
    direccion: number
    foto_url: number
    monto: number
    interes: number
    cant_cuotas: number
    frecuencia_pago: number
    fecha_inicio: number
    fecha_vencimiento: number
    estado: number
    _all: number
  }


  export type Datos_prestamosAvgAggregateInputType = {
    id_prestamo?: true
    id_cliente?: true
    monto?: true
    interes?: true
    cant_cuotas?: true
  }

  export type Datos_prestamosSumAggregateInputType = {
    id_prestamo?: true
    id_cliente?: true
    monto?: true
    interes?: true
    cant_cuotas?: true
  }

  export type Datos_prestamosMinAggregateInputType = {
    id_prestamo?: true
    id_cliente?: true
    nombre?: true
    cedula?: true
    telefono?: true
    direccion?: true
    foto_url?: true
    monto?: true
    interes?: true
    cant_cuotas?: true
    frecuencia_pago?: true
    fecha_inicio?: true
    fecha_vencimiento?: true
    estado?: true
  }

  export type Datos_prestamosMaxAggregateInputType = {
    id_prestamo?: true
    id_cliente?: true
    nombre?: true
    cedula?: true
    telefono?: true
    direccion?: true
    foto_url?: true
    monto?: true
    interes?: true
    cant_cuotas?: true
    frecuencia_pago?: true
    fecha_inicio?: true
    fecha_vencimiento?: true
    estado?: true
  }

  export type Datos_prestamosCountAggregateInputType = {
    id_prestamo?: true
    id_cliente?: true
    nombre?: true
    cedula?: true
    telefono?: true
    direccion?: true
    foto_url?: true
    monto?: true
    interes?: true
    cant_cuotas?: true
    frecuencia_pago?: true
    fecha_inicio?: true
    fecha_vencimiento?: true
    estado?: true
    _all?: true
  }

  export type Datos_prestamosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which datos_prestamos to aggregate.
     */
    where?: datos_prestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos_prestamos to fetch.
     */
    orderBy?: datos_prestamosOrderByWithRelationInput | datos_prestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: datos_prestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos_prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos_prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned datos_prestamos
    **/
    _count?: true | Datos_prestamosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Datos_prestamosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Datos_prestamosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Datos_prestamosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Datos_prestamosMaxAggregateInputType
  }

  export type GetDatos_prestamosAggregateType<T extends Datos_prestamosAggregateArgs> = {
        [P in keyof T & keyof AggregateDatos_prestamos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatos_prestamos[P]>
      : GetScalarType<T[P], AggregateDatos_prestamos[P]>
  }




  export type datos_prestamosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: datos_prestamosWhereInput
    orderBy?: datos_prestamosOrderByWithAggregationInput | datos_prestamosOrderByWithAggregationInput[]
    by: Datos_prestamosScalarFieldEnum[] | Datos_prestamosScalarFieldEnum
    having?: datos_prestamosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Datos_prestamosCountAggregateInputType | true
    _avg?: Datos_prestamosAvgAggregateInputType
    _sum?: Datos_prestamosSumAggregateInputType
    _min?: Datos_prestamosMinAggregateInputType
    _max?: Datos_prestamosMaxAggregateInputType
  }

  export type Datos_prestamosGroupByOutputType = {
    id_prestamo: number
    id_cliente: number | null
    nombre: string | null
    cedula: string | null
    telefono: string | null
    direccion: string | null
    foto_url: string | null
    monto: Decimal | null
    interes: Decimal | null
    cant_cuotas: number | null
    frecuencia_pago: $Enums.frecuencia_pago | null
    fecha_inicio: Date | null
    fecha_vencimiento: Date | null
    estado: $Enums.estado_prestamo | null
    _count: Datos_prestamosCountAggregateOutputType | null
    _avg: Datos_prestamosAvgAggregateOutputType | null
    _sum: Datos_prestamosSumAggregateOutputType | null
    _min: Datos_prestamosMinAggregateOutputType | null
    _max: Datos_prestamosMaxAggregateOutputType | null
  }

  type GetDatos_prestamosGroupByPayload<T extends datos_prestamosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Datos_prestamosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Datos_prestamosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Datos_prestamosGroupByOutputType[P]>
            : GetScalarType<T[P], Datos_prestamosGroupByOutputType[P]>
        }
      >
    >


  export type datos_prestamosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    id_cliente?: boolean
    nombre?: boolean
    cedula?: boolean
    telefono?: boolean
    direccion?: boolean
    foto_url?: boolean
    monto?: boolean
    interes?: boolean
    cant_cuotas?: boolean
    frecuencia_pago?: boolean
    fecha_inicio?: boolean
    fecha_vencimiento?: boolean
    estado?: boolean
  }, ExtArgs["result"]["datos_prestamos"]>

  export type datos_prestamosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    id_cliente?: boolean
    nombre?: boolean
    cedula?: boolean
    telefono?: boolean
    direccion?: boolean
    foto_url?: boolean
    monto?: boolean
    interes?: boolean
    cant_cuotas?: boolean
    frecuencia_pago?: boolean
    fecha_inicio?: boolean
    fecha_vencimiento?: boolean
    estado?: boolean
  }, ExtArgs["result"]["datos_prestamos"]>

  export type datos_prestamosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    id_cliente?: boolean
    nombre?: boolean
    cedula?: boolean
    telefono?: boolean
    direccion?: boolean
    foto_url?: boolean
    monto?: boolean
    interes?: boolean
    cant_cuotas?: boolean
    frecuencia_pago?: boolean
    fecha_inicio?: boolean
    fecha_vencimiento?: boolean
    estado?: boolean
  }, ExtArgs["result"]["datos_prestamos"]>

  export type datos_prestamosSelectScalar = {
    id_prestamo?: boolean
    id_cliente?: boolean
    nombre?: boolean
    cedula?: boolean
    telefono?: boolean
    direccion?: boolean
    foto_url?: boolean
    monto?: boolean
    interes?: boolean
    cant_cuotas?: boolean
    frecuencia_pago?: boolean
    fecha_inicio?: boolean
    fecha_vencimiento?: boolean
    estado?: boolean
  }

  export type datos_prestamosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prestamo" | "id_cliente" | "nombre" | "cedula" | "telefono" | "direccion" | "foto_url" | "monto" | "interes" | "cant_cuotas" | "frecuencia_pago" | "fecha_inicio" | "fecha_vencimiento" | "estado", ExtArgs["result"]["datos_prestamos"]>

  export type $datos_prestamosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "datos_prestamos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_prestamo: number
      id_cliente: number | null
      nombre: string | null
      cedula: string | null
      telefono: string | null
      direccion: string | null
      foto_url: string | null
      monto: Prisma.Decimal | null
      interes: Prisma.Decimal | null
      cant_cuotas: number | null
      frecuencia_pago: $Enums.frecuencia_pago | null
      fecha_inicio: Date | null
      fecha_vencimiento: Date | null
      estado: $Enums.estado_prestamo | null
    }, ExtArgs["result"]["datos_prestamos"]>
    composites: {}
  }

  type datos_prestamosGetPayload<S extends boolean | null | undefined | datos_prestamosDefaultArgs> = $Result.GetResult<Prisma.$datos_prestamosPayload, S>

  type datos_prestamosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<datos_prestamosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Datos_prestamosCountAggregateInputType | true
    }

  export interface datos_prestamosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['datos_prestamos'], meta: { name: 'datos_prestamos' } }
    /**
     * Find zero or one Datos_prestamos that matches the filter.
     * @param {datos_prestamosFindUniqueArgs} args - Arguments to find a Datos_prestamos
     * @example
     * // Get one Datos_prestamos
     * const datos_prestamos = await prisma.datos_prestamos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends datos_prestamosFindUniqueArgs>(args: SelectSubset<T, datos_prestamosFindUniqueArgs<ExtArgs>>): Prisma__datos_prestamosClient<$Result.GetResult<Prisma.$datos_prestamosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Datos_prestamos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {datos_prestamosFindUniqueOrThrowArgs} args - Arguments to find a Datos_prestamos
     * @example
     * // Get one Datos_prestamos
     * const datos_prestamos = await prisma.datos_prestamos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends datos_prestamosFindUniqueOrThrowArgs>(args: SelectSubset<T, datos_prestamosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__datos_prestamosClient<$Result.GetResult<Prisma.$datos_prestamosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Datos_prestamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datos_prestamosFindFirstArgs} args - Arguments to find a Datos_prestamos
     * @example
     * // Get one Datos_prestamos
     * const datos_prestamos = await prisma.datos_prestamos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends datos_prestamosFindFirstArgs>(args?: SelectSubset<T, datos_prestamosFindFirstArgs<ExtArgs>>): Prisma__datos_prestamosClient<$Result.GetResult<Prisma.$datos_prestamosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Datos_prestamos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datos_prestamosFindFirstOrThrowArgs} args - Arguments to find a Datos_prestamos
     * @example
     * // Get one Datos_prestamos
     * const datos_prestamos = await prisma.datos_prestamos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends datos_prestamosFindFirstOrThrowArgs>(args?: SelectSubset<T, datos_prestamosFindFirstOrThrowArgs<ExtArgs>>): Prisma__datos_prestamosClient<$Result.GetResult<Prisma.$datos_prestamosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Datos_prestamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datos_prestamosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datos_prestamos
     * const datos_prestamos = await prisma.datos_prestamos.findMany()
     * 
     * // Get first 10 Datos_prestamos
     * const datos_prestamos = await prisma.datos_prestamos.findMany({ take: 10 })
     * 
     * // Only select the `id_prestamo`
     * const datos_prestamosWithId_prestamoOnly = await prisma.datos_prestamos.findMany({ select: { id_prestamo: true } })
     * 
     */
    findMany<T extends datos_prestamosFindManyArgs>(args?: SelectSubset<T, datos_prestamosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datos_prestamosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Datos_prestamos.
     * @param {datos_prestamosCreateArgs} args - Arguments to create a Datos_prestamos.
     * @example
     * // Create one Datos_prestamos
     * const Datos_prestamos = await prisma.datos_prestamos.create({
     *   data: {
     *     // ... data to create a Datos_prestamos
     *   }
     * })
     * 
     */
    create<T extends datos_prestamosCreateArgs>(args: SelectSubset<T, datos_prestamosCreateArgs<ExtArgs>>): Prisma__datos_prestamosClient<$Result.GetResult<Prisma.$datos_prestamosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Datos_prestamos.
     * @param {datos_prestamosCreateManyArgs} args - Arguments to create many Datos_prestamos.
     * @example
     * // Create many Datos_prestamos
     * const datos_prestamos = await prisma.datos_prestamos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends datos_prestamosCreateManyArgs>(args?: SelectSubset<T, datos_prestamosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Datos_prestamos and returns the data saved in the database.
     * @param {datos_prestamosCreateManyAndReturnArgs} args - Arguments to create many Datos_prestamos.
     * @example
     * // Create many Datos_prestamos
     * const datos_prestamos = await prisma.datos_prestamos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Datos_prestamos and only return the `id_prestamo`
     * const datos_prestamosWithId_prestamoOnly = await prisma.datos_prestamos.createManyAndReturn({
     *   select: { id_prestamo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends datos_prestamosCreateManyAndReturnArgs>(args?: SelectSubset<T, datos_prestamosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datos_prestamosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Datos_prestamos.
     * @param {datos_prestamosDeleteArgs} args - Arguments to delete one Datos_prestamos.
     * @example
     * // Delete one Datos_prestamos
     * const Datos_prestamos = await prisma.datos_prestamos.delete({
     *   where: {
     *     // ... filter to delete one Datos_prestamos
     *   }
     * })
     * 
     */
    delete<T extends datos_prestamosDeleteArgs>(args: SelectSubset<T, datos_prestamosDeleteArgs<ExtArgs>>): Prisma__datos_prestamosClient<$Result.GetResult<Prisma.$datos_prestamosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Datos_prestamos.
     * @param {datos_prestamosUpdateArgs} args - Arguments to update one Datos_prestamos.
     * @example
     * // Update one Datos_prestamos
     * const datos_prestamos = await prisma.datos_prestamos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends datos_prestamosUpdateArgs>(args: SelectSubset<T, datos_prestamosUpdateArgs<ExtArgs>>): Prisma__datos_prestamosClient<$Result.GetResult<Prisma.$datos_prestamosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Datos_prestamos.
     * @param {datos_prestamosDeleteManyArgs} args - Arguments to filter Datos_prestamos to delete.
     * @example
     * // Delete a few Datos_prestamos
     * const { count } = await prisma.datos_prestamos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends datos_prestamosDeleteManyArgs>(args?: SelectSubset<T, datos_prestamosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datos_prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datos_prestamosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datos_prestamos
     * const datos_prestamos = await prisma.datos_prestamos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends datos_prestamosUpdateManyArgs>(args: SelectSubset<T, datos_prestamosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datos_prestamos and returns the data updated in the database.
     * @param {datos_prestamosUpdateManyAndReturnArgs} args - Arguments to update many Datos_prestamos.
     * @example
     * // Update many Datos_prestamos
     * const datos_prestamos = await prisma.datos_prestamos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Datos_prestamos and only return the `id_prestamo`
     * const datos_prestamosWithId_prestamoOnly = await prisma.datos_prestamos.updateManyAndReturn({
     *   select: { id_prestamo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends datos_prestamosUpdateManyAndReturnArgs>(args: SelectSubset<T, datos_prestamosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$datos_prestamosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Datos_prestamos.
     * @param {datos_prestamosUpsertArgs} args - Arguments to update or create a Datos_prestamos.
     * @example
     * // Update or create a Datos_prestamos
     * const datos_prestamos = await prisma.datos_prestamos.upsert({
     *   create: {
     *     // ... data to create a Datos_prestamos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Datos_prestamos we want to update
     *   }
     * })
     */
    upsert<T extends datos_prestamosUpsertArgs>(args: SelectSubset<T, datos_prestamosUpsertArgs<ExtArgs>>): Prisma__datos_prestamosClient<$Result.GetResult<Prisma.$datos_prestamosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Datos_prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datos_prestamosCountArgs} args - Arguments to filter Datos_prestamos to count.
     * @example
     * // Count the number of Datos_prestamos
     * const count = await prisma.datos_prestamos.count({
     *   where: {
     *     // ... the filter for the Datos_prestamos we want to count
     *   }
     * })
    **/
    count<T extends datos_prestamosCountArgs>(
      args?: Subset<T, datos_prestamosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Datos_prestamosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Datos_prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Datos_prestamosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Datos_prestamosAggregateArgs>(args: Subset<T, Datos_prestamosAggregateArgs>): Prisma.PrismaPromise<GetDatos_prestamosAggregateType<T>>

    /**
     * Group by Datos_prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datos_prestamosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends datos_prestamosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: datos_prestamosGroupByArgs['orderBy'] }
        : { orderBy?: datos_prestamosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, datos_prestamosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatos_prestamosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the datos_prestamos model
   */
  readonly fields: datos_prestamosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for datos_prestamos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__datos_prestamosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the datos_prestamos model
   */
  interface datos_prestamosFieldRefs {
    readonly id_prestamo: FieldRef<"datos_prestamos", 'Int'>
    readonly id_cliente: FieldRef<"datos_prestamos", 'Int'>
    readonly nombre: FieldRef<"datos_prestamos", 'String'>
    readonly cedula: FieldRef<"datos_prestamos", 'String'>
    readonly telefono: FieldRef<"datos_prestamos", 'String'>
    readonly direccion: FieldRef<"datos_prestamos", 'String'>
    readonly foto_url: FieldRef<"datos_prestamos", 'String'>
    readonly monto: FieldRef<"datos_prestamos", 'Decimal'>
    readonly interes: FieldRef<"datos_prestamos", 'Decimal'>
    readonly cant_cuotas: FieldRef<"datos_prestamos", 'Int'>
    readonly frecuencia_pago: FieldRef<"datos_prestamos", 'frecuencia_pago'>
    readonly fecha_inicio: FieldRef<"datos_prestamos", 'DateTime'>
    readonly fecha_vencimiento: FieldRef<"datos_prestamos", 'DateTime'>
    readonly estado: FieldRef<"datos_prestamos", 'estado_prestamo'>
  }
    

  // Custom InputTypes
  /**
   * datos_prestamos findUnique
   */
  export type datos_prestamosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_prestamos
     */
    select?: datos_prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_prestamos
     */
    omit?: datos_prestamosOmit<ExtArgs> | null
    /**
     * Filter, which datos_prestamos to fetch.
     */
    where: datos_prestamosWhereUniqueInput
  }

  /**
   * datos_prestamos findUniqueOrThrow
   */
  export type datos_prestamosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_prestamos
     */
    select?: datos_prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_prestamos
     */
    omit?: datos_prestamosOmit<ExtArgs> | null
    /**
     * Filter, which datos_prestamos to fetch.
     */
    where: datos_prestamosWhereUniqueInput
  }

  /**
   * datos_prestamos findFirst
   */
  export type datos_prestamosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_prestamos
     */
    select?: datos_prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_prestamos
     */
    omit?: datos_prestamosOmit<ExtArgs> | null
    /**
     * Filter, which datos_prestamos to fetch.
     */
    where?: datos_prestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos_prestamos to fetch.
     */
    orderBy?: datos_prestamosOrderByWithRelationInput | datos_prestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datos_prestamos.
     */
    cursor?: datos_prestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos_prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos_prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datos_prestamos.
     */
    distinct?: Datos_prestamosScalarFieldEnum | Datos_prestamosScalarFieldEnum[]
  }

  /**
   * datos_prestamos findFirstOrThrow
   */
  export type datos_prestamosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_prestamos
     */
    select?: datos_prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_prestamos
     */
    omit?: datos_prestamosOmit<ExtArgs> | null
    /**
     * Filter, which datos_prestamos to fetch.
     */
    where?: datos_prestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos_prestamos to fetch.
     */
    orderBy?: datos_prestamosOrderByWithRelationInput | datos_prestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datos_prestamos.
     */
    cursor?: datos_prestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos_prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos_prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datos_prestamos.
     */
    distinct?: Datos_prestamosScalarFieldEnum | Datos_prestamosScalarFieldEnum[]
  }

  /**
   * datos_prestamos findMany
   */
  export type datos_prestamosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_prestamos
     */
    select?: datos_prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_prestamos
     */
    omit?: datos_prestamosOmit<ExtArgs> | null
    /**
     * Filter, which datos_prestamos to fetch.
     */
    where?: datos_prestamosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datos_prestamos to fetch.
     */
    orderBy?: datos_prestamosOrderByWithRelationInput | datos_prestamosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing datos_prestamos.
     */
    cursor?: datos_prestamosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datos_prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datos_prestamos.
     */
    skip?: number
    distinct?: Datos_prestamosScalarFieldEnum | Datos_prestamosScalarFieldEnum[]
  }

  /**
   * datos_prestamos create
   */
  export type datos_prestamosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_prestamos
     */
    select?: datos_prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_prestamos
     */
    omit?: datos_prestamosOmit<ExtArgs> | null
    /**
     * The data needed to create a datos_prestamos.
     */
    data: XOR<datos_prestamosCreateInput, datos_prestamosUncheckedCreateInput>
  }

  /**
   * datos_prestamos createMany
   */
  export type datos_prestamosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many datos_prestamos.
     */
    data: datos_prestamosCreateManyInput | datos_prestamosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * datos_prestamos createManyAndReturn
   */
  export type datos_prestamosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_prestamos
     */
    select?: datos_prestamosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the datos_prestamos
     */
    omit?: datos_prestamosOmit<ExtArgs> | null
    /**
     * The data used to create many datos_prestamos.
     */
    data: datos_prestamosCreateManyInput | datos_prestamosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * datos_prestamos update
   */
  export type datos_prestamosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_prestamos
     */
    select?: datos_prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_prestamos
     */
    omit?: datos_prestamosOmit<ExtArgs> | null
    /**
     * The data needed to update a datos_prestamos.
     */
    data: XOR<datos_prestamosUpdateInput, datos_prestamosUncheckedUpdateInput>
    /**
     * Choose, which datos_prestamos to update.
     */
    where: datos_prestamosWhereUniqueInput
  }

  /**
   * datos_prestamos updateMany
   */
  export type datos_prestamosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update datos_prestamos.
     */
    data: XOR<datos_prestamosUpdateManyMutationInput, datos_prestamosUncheckedUpdateManyInput>
    /**
     * Filter which datos_prestamos to update
     */
    where?: datos_prestamosWhereInput
    /**
     * Limit how many datos_prestamos to update.
     */
    limit?: number
  }

  /**
   * datos_prestamos updateManyAndReturn
   */
  export type datos_prestamosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_prestamos
     */
    select?: datos_prestamosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the datos_prestamos
     */
    omit?: datos_prestamosOmit<ExtArgs> | null
    /**
     * The data used to update datos_prestamos.
     */
    data: XOR<datos_prestamosUpdateManyMutationInput, datos_prestamosUncheckedUpdateManyInput>
    /**
     * Filter which datos_prestamos to update
     */
    where?: datos_prestamosWhereInput
    /**
     * Limit how many datos_prestamos to update.
     */
    limit?: number
  }

  /**
   * datos_prestamos upsert
   */
  export type datos_prestamosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_prestamos
     */
    select?: datos_prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_prestamos
     */
    omit?: datos_prestamosOmit<ExtArgs> | null
    /**
     * The filter to search for the datos_prestamos to update in case it exists.
     */
    where: datos_prestamosWhereUniqueInput
    /**
     * In case the datos_prestamos found by the `where` argument doesn't exist, create a new datos_prestamos with this data.
     */
    create: XOR<datos_prestamosCreateInput, datos_prestamosUncheckedCreateInput>
    /**
     * In case the datos_prestamos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<datos_prestamosUpdateInput, datos_prestamosUncheckedUpdateInput>
  }

  /**
   * datos_prestamos delete
   */
  export type datos_prestamosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_prestamos
     */
    select?: datos_prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_prestamos
     */
    omit?: datos_prestamosOmit<ExtArgs> | null
    /**
     * Filter which datos_prestamos to delete.
     */
    where: datos_prestamosWhereUniqueInput
  }

  /**
   * datos_prestamos deleteMany
   */
  export type datos_prestamosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which datos_prestamos to delete
     */
    where?: datos_prestamosWhereInput
    /**
     * Limit how many datos_prestamos to delete.
     */
    limit?: number
  }

  /**
   * datos_prestamos without action
   */
  export type datos_prestamosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the datos_prestamos
     */
    select?: datos_prestamosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the datos_prestamos
     */
    omit?: datos_prestamosOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientesScalarFieldEnum: {
    id_cliente: 'id_cliente',
    nombre: 'nombre',
    cedula: 'cedula',
    telefono: 'telefono',
    email: 'email',
    direccion: 'direccion',
    foto_url: 'foto_url',
    notas: 'notas',
    referido_por: 'referido_por',
    fecha_registro: 'fecha_registro'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const CuotasScalarFieldEnum: {
    id_cuota: 'id_cuota',
    id_prestamo: 'id_prestamo',
    numero: 'numero',
    fecha_prevista: 'fecha_prevista',
    monto: 'monto',
    monto_restante: 'monto_restante',
    intereses_mora: 'intereses_mora',
    estado_pago: 'estado_pago'
  };

  export type CuotasScalarFieldEnum = (typeof CuotasScalarFieldEnum)[keyof typeof CuotasScalarFieldEnum]


  export const LogactividadScalarFieldEnum: {
    id_log: 'id_log',
    id_usuario: 'id_usuario',
    accion: 'accion',
    fecha_hora: 'fecha_hora'
  };

  export type LogactividadScalarFieldEnum = (typeof LogactividadScalarFieldEnum)[keyof typeof LogactividadScalarFieldEnum]


  export const MovimientoscajaScalarFieldEnum: {
    id_movimiento: 'id_movimiento',
    tipo: 'tipo',
    prestamo_id: 'prestamo_id',
    pago_id: 'pago_id',
    descripcion: 'descripcion',
    monto: 'monto',
    fecha: 'fecha',
    usuario_id: 'usuario_id'
  };

  export type MovimientoscajaScalarFieldEnum = (typeof MovimientoscajaScalarFieldEnum)[keyof typeof MovimientoscajaScalarFieldEnum]


  export const PagosScalarFieldEnum: {
    id_pago: 'id_pago',
    id_cuota: 'id_cuota',
    fecha_pago: 'fecha_pago',
    monto_pagado: 'monto_pagado',
    forma_pago: 'forma_pago',
    recibo_numero: 'recibo_numero',
    cobrador_id: 'cobrador_id',
    observaciones: 'observaciones'
  };

  export type PagosScalarFieldEnum = (typeof PagosScalarFieldEnum)[keyof typeof PagosScalarFieldEnum]


  export const PrestamosScalarFieldEnum: {
    id_prestamo: 'id_prestamo',
    id_cliente: 'id_cliente',
    monto: 'monto',
    interes: 'interes',
    total_pagado: 'total_pagado',
    tipo_interes: 'tipo_interes',
    id_usuario: 'id_usuario',
    cant_cuotas: 'cant_cuotas',
    frecuencia_pago: 'frecuencia_pago',
    fecha_inicio: 'fecha_inicio',
    fecha_vencimiento: 'fecha_vencimiento',
    estado: 'estado',
    notas: 'notas'
  };

  export type PrestamosScalarFieldEnum = (typeof PrestamosScalarFieldEnum)[keyof typeof PrestamosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre_usuario: 'nombre_usuario',
    clave_hash: 'clave_hash',
    rol: 'rol',
    fecha_creacion: 'fecha_creacion',
    ultimo_acceso: 'ultimo_acceso',
    fecha_baja: 'fecha_baja',
    razon_baja: 'razon_baja',
    estado: 'estado'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const Datos_prestamosScalarFieldEnum: {
    id_prestamo: 'id_prestamo',
    id_cliente: 'id_cliente',
    nombre: 'nombre',
    cedula: 'cedula',
    telefono: 'telefono',
    direccion: 'direccion',
    foto_url: 'foto_url',
    monto: 'monto',
    interes: 'interes',
    cant_cuotas: 'cant_cuotas',
    frecuencia_pago: 'frecuencia_pago',
    fecha_inicio: 'fecha_inicio',
    fecha_vencimiento: 'fecha_vencimiento',
    estado: 'estado'
  };

  export type Datos_prestamosScalarFieldEnum = (typeof Datos_prestamosScalarFieldEnum)[keyof typeof Datos_prestamosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'estado_cuota'
   */
  export type Enumestado_cuotaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_cuota'>
    


  /**
   * Reference to a field of type 'estado_cuota[]'
   */
  export type ListEnumestado_cuotaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_cuota[]'>
    


  /**
   * Reference to a field of type 'tipo_movimiento'
   */
  export type Enumtipo_movimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_movimiento'>
    


  /**
   * Reference to a field of type 'tipo_movimiento[]'
   */
  export type ListEnumtipo_movimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_movimiento[]'>
    


  /**
   * Reference to a field of type 'forma_pago'
   */
  export type Enumforma_pagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'forma_pago'>
    


  /**
   * Reference to a field of type 'forma_pago[]'
   */
  export type ListEnumforma_pagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'forma_pago[]'>
    


  /**
   * Reference to a field of type 'tipo_interes'
   */
  export type Enumtipo_interesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_interes'>
    


  /**
   * Reference to a field of type 'tipo_interes[]'
   */
  export type ListEnumtipo_interesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tipo_interes[]'>
    


  /**
   * Reference to a field of type 'frecuencia_pago'
   */
  export type Enumfrecuencia_pagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'frecuencia_pago'>
    


  /**
   * Reference to a field of type 'frecuencia_pago[]'
   */
  export type ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'frecuencia_pago[]'>
    


  /**
   * Reference to a field of type 'estado_prestamo'
   */
  export type Enumestado_prestamoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_prestamo'>
    


  /**
   * Reference to a field of type 'estado_prestamo[]'
   */
  export type ListEnumestado_prestamoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_prestamo[]'>
    


  /**
   * Reference to a field of type 'rol'
   */
  export type EnumrolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rol'>
    


  /**
   * Reference to a field of type 'rol[]'
   */
  export type ListEnumrolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rol[]'>
    


  /**
   * Reference to a field of type 'estado_usuario'
   */
  export type Enumestado_usuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_usuario'>
    


  /**
   * Reference to a field of type 'estado_usuario[]'
   */
  export type ListEnumestado_usuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'estado_usuario[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type clientesWhereInput = {
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    id_cliente?: IntFilter<"clientes"> | number
    nombre?: StringFilter<"clientes"> | string
    cedula?: StringFilter<"clientes"> | string
    telefono?: StringNullableFilter<"clientes"> | string | null
    email?: StringNullableFilter<"clientes"> | string | null
    direccion?: StringNullableFilter<"clientes"> | string | null
    foto_url?: StringNullableFilter<"clientes"> | string | null
    notas?: StringNullableFilter<"clientes"> | string | null
    referido_por?: StringNullableFilter<"clientes"> | string | null
    fecha_registro?: DateTimeNullableFilter<"clientes"> | Date | string | null
    prestamos?: PrestamosListRelationFilter
  }

  export type clientesOrderByWithRelationInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    referido_por?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    prestamos?: prestamosOrderByRelationAggregateInput
  }

  export type clientesWhereUniqueInput = Prisma.AtLeast<{
    id_cliente?: number
    cedula?: string
    AND?: clientesWhereInput | clientesWhereInput[]
    OR?: clientesWhereInput[]
    NOT?: clientesWhereInput | clientesWhereInput[]
    nombre?: StringFilter<"clientes"> | string
    telefono?: StringNullableFilter<"clientes"> | string | null
    email?: StringNullableFilter<"clientes"> | string | null
    direccion?: StringNullableFilter<"clientes"> | string | null
    foto_url?: StringNullableFilter<"clientes"> | string | null
    notas?: StringNullableFilter<"clientes"> | string | null
    referido_por?: StringNullableFilter<"clientes"> | string | null
    fecha_registro?: DateTimeNullableFilter<"clientes"> | Date | string | null
    prestamos?: PrestamosListRelationFilter
  }, "id_cliente" | "cedula">

  export type clientesOrderByWithAggregationInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    referido_por?: SortOrderInput | SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    _count?: clientesCountOrderByAggregateInput
    _avg?: clientesAvgOrderByAggregateInput
    _max?: clientesMaxOrderByAggregateInput
    _min?: clientesMinOrderByAggregateInput
    _sum?: clientesSumOrderByAggregateInput
  }

  export type clientesScalarWhereWithAggregatesInput = {
    AND?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    OR?: clientesScalarWhereWithAggregatesInput[]
    NOT?: clientesScalarWhereWithAggregatesInput | clientesScalarWhereWithAggregatesInput[]
    id_cliente?: IntWithAggregatesFilter<"clientes"> | number
    nombre?: StringWithAggregatesFilter<"clientes"> | string
    cedula?: StringWithAggregatesFilter<"clientes"> | string
    telefono?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    email?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    foto_url?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    notas?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    referido_por?: StringNullableWithAggregatesFilter<"clientes"> | string | null
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"clientes"> | Date | string | null
  }

  export type cuotasWhereInput = {
    AND?: cuotasWhereInput | cuotasWhereInput[]
    OR?: cuotasWhereInput[]
    NOT?: cuotasWhereInput | cuotasWhereInput[]
    id_cuota?: IntFilter<"cuotas"> | number
    id_prestamo?: IntFilter<"cuotas"> | number
    numero?: IntFilter<"cuotas"> | number
    fecha_prevista?: DateTimeFilter<"cuotas"> | Date | string
    monto?: DecimalFilter<"cuotas"> | Decimal | DecimalJsLike | number | string
    monto_restante?: DecimalFilter<"cuotas"> | Decimal | DecimalJsLike | number | string
    intereses_mora?: DecimalNullableFilter<"cuotas"> | Decimal | DecimalJsLike | number | string | null
    estado_pago?: Enumestado_cuotaNullableFilter<"cuotas"> | $Enums.estado_cuota | null
    prestamos?: XOR<PrestamosScalarRelationFilter, prestamosWhereInput>
    pagos?: PagosListRelationFilter
  }

  export type cuotasOrderByWithRelationInput = {
    id_cuota?: SortOrder
    id_prestamo?: SortOrder
    numero?: SortOrder
    fecha_prevista?: SortOrder
    monto?: SortOrder
    monto_restante?: SortOrder
    intereses_mora?: SortOrderInput | SortOrder
    estado_pago?: SortOrderInput | SortOrder
    prestamos?: prestamosOrderByWithRelationInput
    pagos?: pagosOrderByRelationAggregateInput
  }

  export type cuotasWhereUniqueInput = Prisma.AtLeast<{
    id_cuota?: number
    AND?: cuotasWhereInput | cuotasWhereInput[]
    OR?: cuotasWhereInput[]
    NOT?: cuotasWhereInput | cuotasWhereInput[]
    id_prestamo?: IntFilter<"cuotas"> | number
    numero?: IntFilter<"cuotas"> | number
    fecha_prevista?: DateTimeFilter<"cuotas"> | Date | string
    monto?: DecimalFilter<"cuotas"> | Decimal | DecimalJsLike | number | string
    monto_restante?: DecimalFilter<"cuotas"> | Decimal | DecimalJsLike | number | string
    intereses_mora?: DecimalNullableFilter<"cuotas"> | Decimal | DecimalJsLike | number | string | null
    estado_pago?: Enumestado_cuotaNullableFilter<"cuotas"> | $Enums.estado_cuota | null
    prestamos?: XOR<PrestamosScalarRelationFilter, prestamosWhereInput>
    pagos?: PagosListRelationFilter
  }, "id_cuota">

  export type cuotasOrderByWithAggregationInput = {
    id_cuota?: SortOrder
    id_prestamo?: SortOrder
    numero?: SortOrder
    fecha_prevista?: SortOrder
    monto?: SortOrder
    monto_restante?: SortOrder
    intereses_mora?: SortOrderInput | SortOrder
    estado_pago?: SortOrderInput | SortOrder
    _count?: cuotasCountOrderByAggregateInput
    _avg?: cuotasAvgOrderByAggregateInput
    _max?: cuotasMaxOrderByAggregateInput
    _min?: cuotasMinOrderByAggregateInput
    _sum?: cuotasSumOrderByAggregateInput
  }

  export type cuotasScalarWhereWithAggregatesInput = {
    AND?: cuotasScalarWhereWithAggregatesInput | cuotasScalarWhereWithAggregatesInput[]
    OR?: cuotasScalarWhereWithAggregatesInput[]
    NOT?: cuotasScalarWhereWithAggregatesInput | cuotasScalarWhereWithAggregatesInput[]
    id_cuota?: IntWithAggregatesFilter<"cuotas"> | number
    id_prestamo?: IntWithAggregatesFilter<"cuotas"> | number
    numero?: IntWithAggregatesFilter<"cuotas"> | number
    fecha_prevista?: DateTimeWithAggregatesFilter<"cuotas"> | Date | string
    monto?: DecimalWithAggregatesFilter<"cuotas"> | Decimal | DecimalJsLike | number | string
    monto_restante?: DecimalWithAggregatesFilter<"cuotas"> | Decimal | DecimalJsLike | number | string
    intereses_mora?: DecimalNullableWithAggregatesFilter<"cuotas"> | Decimal | DecimalJsLike | number | string | null
    estado_pago?: Enumestado_cuotaNullableWithAggregatesFilter<"cuotas"> | $Enums.estado_cuota | null
  }

  export type logactividadWhereInput = {
    AND?: logactividadWhereInput | logactividadWhereInput[]
    OR?: logactividadWhereInput[]
    NOT?: logactividadWhereInput | logactividadWhereInput[]
    id_log?: IntFilter<"logactividad"> | number
    id_usuario?: IntNullableFilter<"logactividad"> | number | null
    accion?: StringFilter<"logactividad"> | string
    fecha_hora?: DateTimeNullableFilter<"logactividad"> | Date | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type logactividadOrderByWithRelationInput = {
    id_log?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    accion?: SortOrder
    fecha_hora?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type logactividadWhereUniqueInput = Prisma.AtLeast<{
    id_log?: number
    AND?: logactividadWhereInput | logactividadWhereInput[]
    OR?: logactividadWhereInput[]
    NOT?: logactividadWhereInput | logactividadWhereInput[]
    id_usuario?: IntNullableFilter<"logactividad"> | number | null
    accion?: StringFilter<"logactividad"> | string
    fecha_hora?: DateTimeNullableFilter<"logactividad"> | Date | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id_log">

  export type logactividadOrderByWithAggregationInput = {
    id_log?: SortOrder
    id_usuario?: SortOrderInput | SortOrder
    accion?: SortOrder
    fecha_hora?: SortOrderInput | SortOrder
    _count?: logactividadCountOrderByAggregateInput
    _avg?: logactividadAvgOrderByAggregateInput
    _max?: logactividadMaxOrderByAggregateInput
    _min?: logactividadMinOrderByAggregateInput
    _sum?: logactividadSumOrderByAggregateInput
  }

  export type logactividadScalarWhereWithAggregatesInput = {
    AND?: logactividadScalarWhereWithAggregatesInput | logactividadScalarWhereWithAggregatesInput[]
    OR?: logactividadScalarWhereWithAggregatesInput[]
    NOT?: logactividadScalarWhereWithAggregatesInput | logactividadScalarWhereWithAggregatesInput[]
    id_log?: IntWithAggregatesFilter<"logactividad"> | number
    id_usuario?: IntNullableWithAggregatesFilter<"logactividad"> | number | null
    accion?: StringWithAggregatesFilter<"logactividad"> | string
    fecha_hora?: DateTimeNullableWithAggregatesFilter<"logactividad"> | Date | string | null
  }

  export type movimientoscajaWhereInput = {
    AND?: movimientoscajaWhereInput | movimientoscajaWhereInput[]
    OR?: movimientoscajaWhereInput[]
    NOT?: movimientoscajaWhereInput | movimientoscajaWhereInput[]
    id_movimiento?: IntFilter<"movimientoscaja"> | number
    tipo?: Enumtipo_movimientoFilter<"movimientoscaja"> | $Enums.tipo_movimiento
    prestamo_id?: IntNullableFilter<"movimientoscaja"> | number | null
    pago_id?: IntNullableFilter<"movimientoscaja"> | number | null
    descripcion?: StringNullableFilter<"movimientoscaja"> | string | null
    monto?: DecimalFilter<"movimientoscaja"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeNullableFilter<"movimientoscaja"> | Date | string | null
    usuario_id?: IntNullableFilter<"movimientoscaja"> | number | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }

  export type movimientoscajaOrderByWithRelationInput = {
    id_movimiento?: SortOrder
    tipo?: SortOrder
    prestamo_id?: SortOrderInput | SortOrder
    pago_id?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    monto?: SortOrder
    fecha?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type movimientoscajaWhereUniqueInput = Prisma.AtLeast<{
    id_movimiento?: number
    AND?: movimientoscajaWhereInput | movimientoscajaWhereInput[]
    OR?: movimientoscajaWhereInput[]
    NOT?: movimientoscajaWhereInput | movimientoscajaWhereInput[]
    tipo?: Enumtipo_movimientoFilter<"movimientoscaja"> | $Enums.tipo_movimiento
    prestamo_id?: IntNullableFilter<"movimientoscaja"> | number | null
    pago_id?: IntNullableFilter<"movimientoscaja"> | number | null
    descripcion?: StringNullableFilter<"movimientoscaja"> | string | null
    monto?: DecimalFilter<"movimientoscaja"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeNullableFilter<"movimientoscaja"> | Date | string | null
    usuario_id?: IntNullableFilter<"movimientoscaja"> | number | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
  }, "id_movimiento">

  export type movimientoscajaOrderByWithAggregationInput = {
    id_movimiento?: SortOrder
    tipo?: SortOrder
    prestamo_id?: SortOrderInput | SortOrder
    pago_id?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    monto?: SortOrder
    fecha?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    _count?: movimientoscajaCountOrderByAggregateInput
    _avg?: movimientoscajaAvgOrderByAggregateInput
    _max?: movimientoscajaMaxOrderByAggregateInput
    _min?: movimientoscajaMinOrderByAggregateInput
    _sum?: movimientoscajaSumOrderByAggregateInput
  }

  export type movimientoscajaScalarWhereWithAggregatesInput = {
    AND?: movimientoscajaScalarWhereWithAggregatesInput | movimientoscajaScalarWhereWithAggregatesInput[]
    OR?: movimientoscajaScalarWhereWithAggregatesInput[]
    NOT?: movimientoscajaScalarWhereWithAggregatesInput | movimientoscajaScalarWhereWithAggregatesInput[]
    id_movimiento?: IntWithAggregatesFilter<"movimientoscaja"> | number
    tipo?: Enumtipo_movimientoWithAggregatesFilter<"movimientoscaja"> | $Enums.tipo_movimiento
    prestamo_id?: IntNullableWithAggregatesFilter<"movimientoscaja"> | number | null
    pago_id?: IntNullableWithAggregatesFilter<"movimientoscaja"> | number | null
    descripcion?: StringNullableWithAggregatesFilter<"movimientoscaja"> | string | null
    monto?: DecimalWithAggregatesFilter<"movimientoscaja"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeNullableWithAggregatesFilter<"movimientoscaja"> | Date | string | null
    usuario_id?: IntNullableWithAggregatesFilter<"movimientoscaja"> | number | null
  }

  export type pagosWhereInput = {
    AND?: pagosWhereInput | pagosWhereInput[]
    OR?: pagosWhereInput[]
    NOT?: pagosWhereInput | pagosWhereInput[]
    id_pago?: IntFilter<"pagos"> | number
    id_cuota?: IntFilter<"pagos"> | number
    fecha_pago?: DateTimeFilter<"pagos"> | Date | string
    monto_pagado?: DecimalFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    forma_pago?: Enumforma_pagoNullableFilter<"pagos"> | $Enums.forma_pago | null
    recibo_numero?: IntNullableFilter<"pagos"> | number | null
    cobrador_id?: IntNullableFilter<"pagos"> | number | null
    observaciones?: StringNullableFilter<"pagos"> | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
    cuotas?: XOR<CuotasScalarRelationFilter, cuotasWhereInput>
  }

  export type pagosOrderByWithRelationInput = {
    id_pago?: SortOrder
    id_cuota?: SortOrder
    fecha_pago?: SortOrder
    monto_pagado?: SortOrder
    forma_pago?: SortOrderInput | SortOrder
    recibo_numero?: SortOrderInput | SortOrder
    cobrador_id?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    cuotas?: cuotasOrderByWithRelationInput
  }

  export type pagosWhereUniqueInput = Prisma.AtLeast<{
    id_pago?: number
    AND?: pagosWhereInput | pagosWhereInput[]
    OR?: pagosWhereInput[]
    NOT?: pagosWhereInput | pagosWhereInput[]
    id_cuota?: IntFilter<"pagos"> | number
    fecha_pago?: DateTimeFilter<"pagos"> | Date | string
    monto_pagado?: DecimalFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    forma_pago?: Enumforma_pagoNullableFilter<"pagos"> | $Enums.forma_pago | null
    recibo_numero?: IntNullableFilter<"pagos"> | number | null
    cobrador_id?: IntNullableFilter<"pagos"> | number | null
    observaciones?: StringNullableFilter<"pagos"> | string | null
    usuarios?: XOR<UsuariosNullableScalarRelationFilter, usuariosWhereInput> | null
    cuotas?: XOR<CuotasScalarRelationFilter, cuotasWhereInput>
  }, "id_pago">

  export type pagosOrderByWithAggregationInput = {
    id_pago?: SortOrder
    id_cuota?: SortOrder
    fecha_pago?: SortOrder
    monto_pagado?: SortOrder
    forma_pago?: SortOrderInput | SortOrder
    recibo_numero?: SortOrderInput | SortOrder
    cobrador_id?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    _count?: pagosCountOrderByAggregateInput
    _avg?: pagosAvgOrderByAggregateInput
    _max?: pagosMaxOrderByAggregateInput
    _min?: pagosMinOrderByAggregateInput
    _sum?: pagosSumOrderByAggregateInput
  }

  export type pagosScalarWhereWithAggregatesInput = {
    AND?: pagosScalarWhereWithAggregatesInput | pagosScalarWhereWithAggregatesInput[]
    OR?: pagosScalarWhereWithAggregatesInput[]
    NOT?: pagosScalarWhereWithAggregatesInput | pagosScalarWhereWithAggregatesInput[]
    id_pago?: IntWithAggregatesFilter<"pagos"> | number
    id_cuota?: IntWithAggregatesFilter<"pagos"> | number
    fecha_pago?: DateTimeWithAggregatesFilter<"pagos"> | Date | string
    monto_pagado?: DecimalWithAggregatesFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    forma_pago?: Enumforma_pagoNullableWithAggregatesFilter<"pagos"> | $Enums.forma_pago | null
    recibo_numero?: IntNullableWithAggregatesFilter<"pagos"> | number | null
    cobrador_id?: IntNullableWithAggregatesFilter<"pagos"> | number | null
    observaciones?: StringNullableWithAggregatesFilter<"pagos"> | string | null
  }

  export type prestamosWhereInput = {
    AND?: prestamosWhereInput | prestamosWhereInput[]
    OR?: prestamosWhereInput[]
    NOT?: prestamosWhereInput | prestamosWhereInput[]
    id_prestamo?: IntFilter<"prestamos"> | number
    id_cliente?: IntFilter<"prestamos"> | number
    monto?: DecimalFilter<"prestamos"> | Decimal | DecimalJsLike | number | string
    interes?: DecimalFilter<"prestamos"> | Decimal | DecimalJsLike | number | string
    total_pagado?: DecimalNullableFilter<"prestamos"> | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: Enumtipo_interesNullableFilter<"prestamos"> | $Enums.tipo_interes | null
    id_usuario?: IntFilter<"prestamos"> | number
    cant_cuotas?: IntFilter<"prestamos"> | number
    frecuencia_pago?: Enumfrecuencia_pagoFilter<"prestamos"> | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFilter<"prestamos"> | Date | string
    fecha_vencimiento?: DateTimeFilter<"prestamos"> | Date | string
    estado?: Enumestado_prestamoNullableFilter<"prestamos"> | $Enums.estado_prestamo | null
    notas?: StringNullableFilter<"prestamos"> | string | null
    cuotas?: CuotasListRelationFilter
    clientes?: XOR<ClientesScalarRelationFilter, clientesWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type prestamosOrderByWithRelationInput = {
    id_prestamo?: SortOrder
    id_cliente?: SortOrder
    monto?: SortOrder
    interes?: SortOrder
    total_pagado?: SortOrderInput | SortOrder
    tipo_interes?: SortOrderInput | SortOrder
    id_usuario?: SortOrder
    cant_cuotas?: SortOrder
    frecuencia_pago?: SortOrder
    fecha_inicio?: SortOrder
    fecha_vencimiento?: SortOrder
    estado?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    cuotas?: cuotasOrderByRelationAggregateInput
    clientes?: clientesOrderByWithRelationInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type prestamosWhereUniqueInput = Prisma.AtLeast<{
    id_prestamo?: number
    AND?: prestamosWhereInput | prestamosWhereInput[]
    OR?: prestamosWhereInput[]
    NOT?: prestamosWhereInput | prestamosWhereInput[]
    id_cliente?: IntFilter<"prestamos"> | number
    monto?: DecimalFilter<"prestamos"> | Decimal | DecimalJsLike | number | string
    interes?: DecimalFilter<"prestamos"> | Decimal | DecimalJsLike | number | string
    total_pagado?: DecimalNullableFilter<"prestamos"> | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: Enumtipo_interesNullableFilter<"prestamos"> | $Enums.tipo_interes | null
    id_usuario?: IntFilter<"prestamos"> | number
    cant_cuotas?: IntFilter<"prestamos"> | number
    frecuencia_pago?: Enumfrecuencia_pagoFilter<"prestamos"> | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFilter<"prestamos"> | Date | string
    fecha_vencimiento?: DateTimeFilter<"prestamos"> | Date | string
    estado?: Enumestado_prestamoNullableFilter<"prestamos"> | $Enums.estado_prestamo | null
    notas?: StringNullableFilter<"prestamos"> | string | null
    cuotas?: CuotasListRelationFilter
    clientes?: XOR<ClientesScalarRelationFilter, clientesWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id_prestamo">

  export type prestamosOrderByWithAggregationInput = {
    id_prestamo?: SortOrder
    id_cliente?: SortOrder
    monto?: SortOrder
    interes?: SortOrder
    total_pagado?: SortOrderInput | SortOrder
    tipo_interes?: SortOrderInput | SortOrder
    id_usuario?: SortOrder
    cant_cuotas?: SortOrder
    frecuencia_pago?: SortOrder
    fecha_inicio?: SortOrder
    fecha_vencimiento?: SortOrder
    estado?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    _count?: prestamosCountOrderByAggregateInput
    _avg?: prestamosAvgOrderByAggregateInput
    _max?: prestamosMaxOrderByAggregateInput
    _min?: prestamosMinOrderByAggregateInput
    _sum?: prestamosSumOrderByAggregateInput
  }

  export type prestamosScalarWhereWithAggregatesInput = {
    AND?: prestamosScalarWhereWithAggregatesInput | prestamosScalarWhereWithAggregatesInput[]
    OR?: prestamosScalarWhereWithAggregatesInput[]
    NOT?: prestamosScalarWhereWithAggregatesInput | prestamosScalarWhereWithAggregatesInput[]
    id_prestamo?: IntWithAggregatesFilter<"prestamos"> | number
    id_cliente?: IntWithAggregatesFilter<"prestamos"> | number
    monto?: DecimalWithAggregatesFilter<"prestamos"> | Decimal | DecimalJsLike | number | string
    interes?: DecimalWithAggregatesFilter<"prestamos"> | Decimal | DecimalJsLike | number | string
    total_pagado?: DecimalNullableWithAggregatesFilter<"prestamos"> | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: Enumtipo_interesNullableWithAggregatesFilter<"prestamos"> | $Enums.tipo_interes | null
    id_usuario?: IntWithAggregatesFilter<"prestamos"> | number
    cant_cuotas?: IntWithAggregatesFilter<"prestamos"> | number
    frecuencia_pago?: Enumfrecuencia_pagoWithAggregatesFilter<"prestamos"> | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeWithAggregatesFilter<"prestamos"> | Date | string
    fecha_vencimiento?: DateTimeWithAggregatesFilter<"prestamos"> | Date | string
    estado?: Enumestado_prestamoNullableWithAggregatesFilter<"prestamos"> | $Enums.estado_prestamo | null
    notas?: StringNullableWithAggregatesFilter<"prestamos"> | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: IntFilter<"usuarios"> | number
    nombre_usuario?: StringFilter<"usuarios"> | string
    clave_hash?: StringFilter<"usuarios"> | string
    rol?: EnumrolFilter<"usuarios"> | $Enums.rol
    fecha_creacion?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    ultimo_acceso?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    fecha_baja?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    razon_baja?: StringNullableFilter<"usuarios"> | string | null
    estado?: Enumestado_usuarioNullableFilter<"usuarios"> | $Enums.estado_usuario | null
    logactividad?: LogactividadListRelationFilter
    movimientoscaja?: MovimientoscajaListRelationFilter
    pagos?: PagosListRelationFilter
    prestamos?: PrestamosListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    clave_hash?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    ultimo_acceso?: SortOrderInput | SortOrder
    fecha_baja?: SortOrderInput | SortOrder
    razon_baja?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    logactividad?: logactividadOrderByRelationAggregateInput
    movimientoscaja?: movimientoscajaOrderByRelationAggregateInput
    pagos?: pagosOrderByRelationAggregateInput
    prestamos?: prestamosOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    nombre_usuario?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    clave_hash?: StringFilter<"usuarios"> | string
    rol?: EnumrolFilter<"usuarios"> | $Enums.rol
    fecha_creacion?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    ultimo_acceso?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    fecha_baja?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    razon_baja?: StringNullableFilter<"usuarios"> | string | null
    estado?: Enumestado_usuarioNullableFilter<"usuarios"> | $Enums.estado_usuario | null
    logactividad?: LogactividadListRelationFilter
    movimientoscaja?: MovimientoscajaListRelationFilter
    pagos?: PagosListRelationFilter
    prestamos?: PrestamosListRelationFilter
  }, "id_usuario" | "nombre_usuario">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    clave_hash?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrderInput | SortOrder
    ultimo_acceso?: SortOrderInput | SortOrder
    fecha_baja?: SortOrderInput | SortOrder
    razon_baja?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuarios"> | number
    nombre_usuario?: StringWithAggregatesFilter<"usuarios"> | string
    clave_hash?: StringWithAggregatesFilter<"usuarios"> | string
    rol?: EnumrolWithAggregatesFilter<"usuarios"> | $Enums.rol
    fecha_creacion?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
    ultimo_acceso?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
    fecha_baja?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
    razon_baja?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    estado?: Enumestado_usuarioNullableWithAggregatesFilter<"usuarios"> | $Enums.estado_usuario | null
  }

  export type datos_prestamosWhereInput = {
    AND?: datos_prestamosWhereInput | datos_prestamosWhereInput[]
    OR?: datos_prestamosWhereInput[]
    NOT?: datos_prestamosWhereInput | datos_prestamosWhereInput[]
    id_prestamo?: IntFilter<"datos_prestamos"> | number
    id_cliente?: IntNullableFilter<"datos_prestamos"> | number | null
    nombre?: StringNullableFilter<"datos_prestamos"> | string | null
    cedula?: StringNullableFilter<"datos_prestamos"> | string | null
    telefono?: StringNullableFilter<"datos_prestamos"> | string | null
    direccion?: StringNullableFilter<"datos_prestamos"> | string | null
    foto_url?: StringNullableFilter<"datos_prestamos"> | string | null
    monto?: DecimalNullableFilter<"datos_prestamos"> | Decimal | DecimalJsLike | number | string | null
    interes?: DecimalNullableFilter<"datos_prestamos"> | Decimal | DecimalJsLike | number | string | null
    cant_cuotas?: IntNullableFilter<"datos_prestamos"> | number | null
    frecuencia_pago?: Enumfrecuencia_pagoNullableFilter<"datos_prestamos"> | $Enums.frecuencia_pago | null
    fecha_inicio?: DateTimeNullableFilter<"datos_prestamos"> | Date | string | null
    fecha_vencimiento?: DateTimeNullableFilter<"datos_prestamos"> | Date | string | null
    estado?: Enumestado_prestamoNullableFilter<"datos_prestamos"> | $Enums.estado_prestamo | null
  }

  export type datos_prestamosOrderByWithRelationInput = {
    id_prestamo?: SortOrder
    id_cliente?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    cedula?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    monto?: SortOrderInput | SortOrder
    interes?: SortOrderInput | SortOrder
    cant_cuotas?: SortOrderInput | SortOrder
    frecuencia_pago?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrderInput | SortOrder
    fecha_vencimiento?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
  }

  export type datos_prestamosWhereUniqueInput = Prisma.AtLeast<{
    id_prestamo?: number
    AND?: datos_prestamosWhereInput | datos_prestamosWhereInput[]
    OR?: datos_prestamosWhereInput[]
    NOT?: datos_prestamosWhereInput | datos_prestamosWhereInput[]
    id_cliente?: IntNullableFilter<"datos_prestamos"> | number | null
    nombre?: StringNullableFilter<"datos_prestamos"> | string | null
    cedula?: StringNullableFilter<"datos_prestamos"> | string | null
    telefono?: StringNullableFilter<"datos_prestamos"> | string | null
    direccion?: StringNullableFilter<"datos_prestamos"> | string | null
    foto_url?: StringNullableFilter<"datos_prestamos"> | string | null
    monto?: DecimalNullableFilter<"datos_prestamos"> | Decimal | DecimalJsLike | number | string | null
    interes?: DecimalNullableFilter<"datos_prestamos"> | Decimal | DecimalJsLike | number | string | null
    cant_cuotas?: IntNullableFilter<"datos_prestamos"> | number | null
    frecuencia_pago?: Enumfrecuencia_pagoNullableFilter<"datos_prestamos"> | $Enums.frecuencia_pago | null
    fecha_inicio?: DateTimeNullableFilter<"datos_prestamos"> | Date | string | null
    fecha_vencimiento?: DateTimeNullableFilter<"datos_prestamos"> | Date | string | null
    estado?: Enumestado_prestamoNullableFilter<"datos_prestamos"> | $Enums.estado_prestamo | null
  }, "id_prestamo">

  export type datos_prestamosOrderByWithAggregationInput = {
    id_prestamo?: SortOrder
    id_cliente?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    cedula?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    monto?: SortOrderInput | SortOrder
    interes?: SortOrderInput | SortOrder
    cant_cuotas?: SortOrderInput | SortOrder
    frecuencia_pago?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrderInput | SortOrder
    fecha_vencimiento?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    _count?: datos_prestamosCountOrderByAggregateInput
    _avg?: datos_prestamosAvgOrderByAggregateInput
    _max?: datos_prestamosMaxOrderByAggregateInput
    _min?: datos_prestamosMinOrderByAggregateInput
    _sum?: datos_prestamosSumOrderByAggregateInput
  }

  export type datos_prestamosScalarWhereWithAggregatesInput = {
    AND?: datos_prestamosScalarWhereWithAggregatesInput | datos_prestamosScalarWhereWithAggregatesInput[]
    OR?: datos_prestamosScalarWhereWithAggregatesInput[]
    NOT?: datos_prestamosScalarWhereWithAggregatesInput | datos_prestamosScalarWhereWithAggregatesInput[]
    id_prestamo?: IntWithAggregatesFilter<"datos_prestamos"> | number
    id_cliente?: IntNullableWithAggregatesFilter<"datos_prestamos"> | number | null
    nombre?: StringNullableWithAggregatesFilter<"datos_prestamos"> | string | null
    cedula?: StringNullableWithAggregatesFilter<"datos_prestamos"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"datos_prestamos"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"datos_prestamos"> | string | null
    foto_url?: StringNullableWithAggregatesFilter<"datos_prestamos"> | string | null
    monto?: DecimalNullableWithAggregatesFilter<"datos_prestamos"> | Decimal | DecimalJsLike | number | string | null
    interes?: DecimalNullableWithAggregatesFilter<"datos_prestamos"> | Decimal | DecimalJsLike | number | string | null
    cant_cuotas?: IntNullableWithAggregatesFilter<"datos_prestamos"> | number | null
    frecuencia_pago?: Enumfrecuencia_pagoNullableWithAggregatesFilter<"datos_prestamos"> | $Enums.frecuencia_pago | null
    fecha_inicio?: DateTimeNullableWithAggregatesFilter<"datos_prestamos"> | Date | string | null
    fecha_vencimiento?: DateTimeNullableWithAggregatesFilter<"datos_prestamos"> | Date | string | null
    estado?: Enumestado_prestamoNullableWithAggregatesFilter<"datos_prestamos"> | $Enums.estado_prestamo | null
  }

  export type clientesCreateInput = {
    nombre: string
    cedula: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    foto_url?: string | null
    notas?: string | null
    referido_por?: string | null
    fecha_registro?: Date | string | null
    prestamos?: prestamosCreateNestedManyWithoutClientesInput
  }

  export type clientesUncheckedCreateInput = {
    id_cliente?: number
    nombre: string
    cedula: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    foto_url?: string | null
    notas?: string | null
    referido_por?: string | null
    fecha_registro?: Date | string | null
    prestamos?: prestamosUncheckedCreateNestedManyWithoutClientesInput
  }

  export type clientesUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    referido_por?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prestamos?: prestamosUpdateManyWithoutClientesNestedInput
  }

  export type clientesUncheckedUpdateInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    referido_por?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prestamos?: prestamosUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type clientesCreateManyInput = {
    id_cliente?: number
    nombre: string
    cedula: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    foto_url?: string | null
    notas?: string | null
    referido_por?: string | null
    fecha_registro?: Date | string | null
  }

  export type clientesUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    referido_por?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clientesUncheckedUpdateManyInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    referido_por?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cuotasCreateInput = {
    numero: number
    fecha_prevista: Date | string
    monto: Decimal | DecimalJsLike | number | string
    monto_restante: Decimal | DecimalJsLike | number | string
    intereses_mora?: Decimal | DecimalJsLike | number | string | null
    estado_pago?: $Enums.estado_cuota | null
    prestamos: prestamosCreateNestedOneWithoutCuotasInput
    pagos?: pagosCreateNestedManyWithoutCuotasInput
  }

  export type cuotasUncheckedCreateInput = {
    id_cuota?: number
    id_prestamo: number
    numero: number
    fecha_prevista: Date | string
    monto: Decimal | DecimalJsLike | number | string
    monto_restante: Decimal | DecimalJsLike | number | string
    intereses_mora?: Decimal | DecimalJsLike | number | string | null
    estado_pago?: $Enums.estado_cuota | null
    pagos?: pagosUncheckedCreateNestedManyWithoutCuotasInput
  }

  export type cuotasUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    fecha_prevista?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_restante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    intereses_mora?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado_pago?: NullableEnumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota | null
    prestamos?: prestamosUpdateOneRequiredWithoutCuotasNestedInput
    pagos?: pagosUpdateManyWithoutCuotasNestedInput
  }

  export type cuotasUncheckedUpdateInput = {
    id_cuota?: IntFieldUpdateOperationsInput | number
    id_prestamo?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    fecha_prevista?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_restante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    intereses_mora?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado_pago?: NullableEnumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota | null
    pagos?: pagosUncheckedUpdateManyWithoutCuotasNestedInput
  }

  export type cuotasCreateManyInput = {
    id_cuota?: number
    id_prestamo: number
    numero: number
    fecha_prevista: Date | string
    monto: Decimal | DecimalJsLike | number | string
    monto_restante: Decimal | DecimalJsLike | number | string
    intereses_mora?: Decimal | DecimalJsLike | number | string | null
    estado_pago?: $Enums.estado_cuota | null
  }

  export type cuotasUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    fecha_prevista?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_restante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    intereses_mora?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado_pago?: NullableEnumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota | null
  }

  export type cuotasUncheckedUpdateManyInput = {
    id_cuota?: IntFieldUpdateOperationsInput | number
    id_prestamo?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    fecha_prevista?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_restante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    intereses_mora?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado_pago?: NullableEnumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota | null
  }

  export type logactividadCreateInput = {
    accion: string
    fecha_hora?: Date | string | null
    usuarios?: usuariosCreateNestedOneWithoutLogactividadInput
  }

  export type logactividadUncheckedCreateInput = {
    id_log?: number
    id_usuario?: number | null
    accion: string
    fecha_hora?: Date | string | null
  }

  export type logactividadUpdateInput = {
    accion?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneWithoutLogactividadNestedInput
  }

  export type logactividadUncheckedUpdateInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    accion?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logactividadCreateManyInput = {
    id_log?: number
    id_usuario?: number | null
    accion: string
    fecha_hora?: Date | string | null
  }

  export type logactividadUpdateManyMutationInput = {
    accion?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logactividadUncheckedUpdateManyInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    id_usuario?: NullableIntFieldUpdateOperationsInput | number | null
    accion?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoscajaCreateInput = {
    tipo: $Enums.tipo_movimiento
    prestamo_id?: number | null
    pago_id?: number | null
    descripcion?: string | null
    monto: Decimal | DecimalJsLike | number | string
    fecha?: Date | string | null
    usuarios?: usuariosCreateNestedOneWithoutMovimientoscajaInput
  }

  export type movimientoscajaUncheckedCreateInput = {
    id_movimiento?: number
    tipo: $Enums.tipo_movimiento
    prestamo_id?: number | null
    pago_id?: number | null
    descripcion?: string | null
    monto: Decimal | DecimalJsLike | number | string
    fecha?: Date | string | null
    usuario_id?: number | null
  }

  export type movimientoscajaUpdateInput = {
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    prestamo_id?: NullableIntFieldUpdateOperationsInput | number | null
    pago_id?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneWithoutMovimientoscajaNestedInput
  }

  export type movimientoscajaUncheckedUpdateInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    prestamo_id?: NullableIntFieldUpdateOperationsInput | number | null
    pago_id?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type movimientoscajaCreateManyInput = {
    id_movimiento?: number
    tipo: $Enums.tipo_movimiento
    prestamo_id?: number | null
    pago_id?: number | null
    descripcion?: string | null
    monto: Decimal | DecimalJsLike | number | string
    fecha?: Date | string | null
    usuario_id?: number | null
  }

  export type movimientoscajaUpdateManyMutationInput = {
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    prestamo_id?: NullableIntFieldUpdateOperationsInput | number | null
    pago_id?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoscajaUncheckedUpdateManyInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    prestamo_id?: NullableIntFieldUpdateOperationsInput | number | null
    pago_id?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pagosCreateInput = {
    fecha_pago: Date | string
    monto_pagado: Decimal | DecimalJsLike | number | string
    forma_pago?: $Enums.forma_pago | null
    recibo_numero?: number | null
    observaciones?: string | null
    usuarios?: usuariosCreateNestedOneWithoutPagosInput
    cuotas: cuotasCreateNestedOneWithoutPagosInput
  }

  export type pagosUncheckedCreateInput = {
    id_pago?: number
    id_cuota: number
    fecha_pago: Date | string
    monto_pagado: Decimal | DecimalJsLike | number | string
    forma_pago?: $Enums.forma_pago | null
    recibo_numero?: number | null
    cobrador_id?: number | null
    observaciones?: string | null
  }

  export type pagosUpdateInput = {
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forma_pago?: NullableEnumforma_pagoFieldUpdateOperationsInput | $Enums.forma_pago | null
    recibo_numero?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUpdateOneWithoutPagosNestedInput
    cuotas?: cuotasUpdateOneRequiredWithoutPagosNestedInput
  }

  export type pagosUncheckedUpdateInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    id_cuota?: IntFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forma_pago?: NullableEnumforma_pagoFieldUpdateOperationsInput | $Enums.forma_pago | null
    recibo_numero?: NullableIntFieldUpdateOperationsInput | number | null
    cobrador_id?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pagosCreateManyInput = {
    id_pago?: number
    id_cuota: number
    fecha_pago: Date | string
    monto_pagado: Decimal | DecimalJsLike | number | string
    forma_pago?: $Enums.forma_pago | null
    recibo_numero?: number | null
    cobrador_id?: number | null
    observaciones?: string | null
  }

  export type pagosUpdateManyMutationInput = {
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forma_pago?: NullableEnumforma_pagoFieldUpdateOperationsInput | $Enums.forma_pago | null
    recibo_numero?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pagosUncheckedUpdateManyInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    id_cuota?: IntFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forma_pago?: NullableEnumforma_pagoFieldUpdateOperationsInput | $Enums.forma_pago | null
    recibo_numero?: NullableIntFieldUpdateOperationsInput | number | null
    cobrador_id?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prestamosCreateInput = {
    monto: Decimal | DecimalJsLike | number | string
    interes: Decimal | DecimalJsLike | number | string
    total_pagado?: Decimal | DecimalJsLike | number | string | null
    tipo_interes?: $Enums.tipo_interes | null
    cant_cuotas: number
    frecuencia_pago: $Enums.frecuencia_pago
    fecha_inicio: Date | string
    fecha_vencimiento: Date | string
    estado?: $Enums.estado_prestamo | null
    notas?: string | null
    cuotas?: cuotasCreateNestedManyWithoutPrestamosInput
    clientes: clientesCreateNestedOneWithoutPrestamosInput
    usuarios: usuariosCreateNestedOneWithoutPrestamosInput
  }

  export type prestamosUncheckedCreateInput = {
    id_prestamo?: number
    id_cliente: number
    monto: Decimal | DecimalJsLike | number | string
    interes: Decimal | DecimalJsLike | number | string
    total_pagado?: Decimal | DecimalJsLike | number | string | null
    tipo_interes?: $Enums.tipo_interes | null
    id_usuario: number
    cant_cuotas: number
    frecuencia_pago: $Enums.frecuencia_pago
    fecha_inicio: Date | string
    fecha_vencimiento: Date | string
    estado?: $Enums.estado_prestamo | null
    notas?: string | null
    cuotas?: cuotasUncheckedCreateNestedManyWithoutPrestamosInput
  }

  export type prestamosUpdateInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: NullableEnumtipo_interesFieldUpdateOperationsInput | $Enums.tipo_interes | null
    cant_cuotas?: IntFieldUpdateOperationsInput | number
    frecuencia_pago?: Enumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    cuotas?: cuotasUpdateManyWithoutPrestamosNestedInput
    clientes?: clientesUpdateOneRequiredWithoutPrestamosNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutPrestamosNestedInput
  }

  export type prestamosUncheckedUpdateInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: NullableEnumtipo_interesFieldUpdateOperationsInput | $Enums.tipo_interes | null
    id_usuario?: IntFieldUpdateOperationsInput | number
    cant_cuotas?: IntFieldUpdateOperationsInput | number
    frecuencia_pago?: Enumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    cuotas?: cuotasUncheckedUpdateManyWithoutPrestamosNestedInput
  }

  export type prestamosCreateManyInput = {
    id_prestamo?: number
    id_cliente: number
    monto: Decimal | DecimalJsLike | number | string
    interes: Decimal | DecimalJsLike | number | string
    total_pagado?: Decimal | DecimalJsLike | number | string | null
    tipo_interes?: $Enums.tipo_interes | null
    id_usuario: number
    cant_cuotas: number
    frecuencia_pago: $Enums.frecuencia_pago
    fecha_inicio: Date | string
    fecha_vencimiento: Date | string
    estado?: $Enums.estado_prestamo | null
    notas?: string | null
  }

  export type prestamosUpdateManyMutationInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: NullableEnumtipo_interesFieldUpdateOperationsInput | $Enums.tipo_interes | null
    cant_cuotas?: IntFieldUpdateOperationsInput | number
    frecuencia_pago?: Enumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prestamosUncheckedUpdateManyInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: NullableEnumtipo_interesFieldUpdateOperationsInput | $Enums.tipo_interes | null
    id_usuario?: IntFieldUpdateOperationsInput | number
    cant_cuotas?: IntFieldUpdateOperationsInput | number
    frecuencia_pago?: Enumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosCreateInput = {
    nombre_usuario: string
    clave_hash: string
    rol: $Enums.rol
    fecha_creacion?: Date | string | null
    ultimo_acceso?: Date | string | null
    fecha_baja?: Date | string | null
    razon_baja?: string | null
    estado?: $Enums.estado_usuario | null
    logactividad?: logactividadCreateNestedManyWithoutUsuariosInput
    movimientoscaja?: movimientoscajaCreateNestedManyWithoutUsuariosInput
    pagos?: pagosCreateNestedManyWithoutUsuariosInput
    prestamos?: prestamosCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: number
    nombre_usuario: string
    clave_hash: string
    rol: $Enums.rol
    fecha_creacion?: Date | string | null
    ultimo_acceso?: Date | string | null
    fecha_baja?: Date | string | null
    razon_baja?: string | null
    estado?: $Enums.estado_usuario | null
    logactividad?: logactividadUncheckedCreateNestedManyWithoutUsuariosInput
    movimientoscaja?: movimientoscajaUncheckedCreateNestedManyWithoutUsuariosInput
    pagos?: pagosUncheckedCreateNestedManyWithoutUsuariosInput
    prestamos?: prestamosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave_hash?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon_baja?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableEnumestado_usuarioFieldUpdateOperationsInput | $Enums.estado_usuario | null
    logactividad?: logactividadUpdateManyWithoutUsuariosNestedInput
    movimientoscaja?: movimientoscajaUpdateManyWithoutUsuariosNestedInput
    pagos?: pagosUpdateManyWithoutUsuariosNestedInput
    prestamos?: prestamosUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave_hash?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon_baja?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableEnumestado_usuarioFieldUpdateOperationsInput | $Enums.estado_usuario | null
    logactividad?: logactividadUncheckedUpdateManyWithoutUsuariosNestedInput
    movimientoscaja?: movimientoscajaUncheckedUpdateManyWithoutUsuariosNestedInput
    pagos?: pagosUncheckedUpdateManyWithoutUsuariosNestedInput
    prestamos?: prestamosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id_usuario?: number
    nombre_usuario: string
    clave_hash: string
    rol: $Enums.rol
    fecha_creacion?: Date | string | null
    ultimo_acceso?: Date | string | null
    fecha_baja?: Date | string | null
    razon_baja?: string | null
    estado?: $Enums.estado_usuario | null
  }

  export type usuariosUpdateManyMutationInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave_hash?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon_baja?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableEnumestado_usuarioFieldUpdateOperationsInput | $Enums.estado_usuario | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave_hash?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon_baja?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableEnumestado_usuarioFieldUpdateOperationsInput | $Enums.estado_usuario | null
  }

  export type datos_prestamosCreateInput = {
    id_prestamo: number
    id_cliente?: number | null
    nombre?: string | null
    cedula?: string | null
    telefono?: string | null
    direccion?: string | null
    foto_url?: string | null
    monto?: Decimal | DecimalJsLike | number | string | null
    interes?: Decimal | DecimalJsLike | number | string | null
    cant_cuotas?: number | null
    frecuencia_pago?: $Enums.frecuencia_pago | null
    fecha_inicio?: Date | string | null
    fecha_vencimiento?: Date | string | null
    estado?: $Enums.estado_prestamo | null
  }

  export type datos_prestamosUncheckedCreateInput = {
    id_prestamo: number
    id_cliente?: number | null
    nombre?: string | null
    cedula?: string | null
    telefono?: string | null
    direccion?: string | null
    foto_url?: string | null
    monto?: Decimal | DecimalJsLike | number | string | null
    interes?: Decimal | DecimalJsLike | number | string | null
    cant_cuotas?: number | null
    frecuencia_pago?: $Enums.frecuencia_pago | null
    fecha_inicio?: Date | string | null
    fecha_vencimiento?: Date | string | null
    estado?: $Enums.estado_prestamo | null
  }

  export type datos_prestamosUpdateInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_cliente?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    cedula?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cant_cuotas?: NullableIntFieldUpdateOperationsInput | number | null
    frecuencia_pago?: NullableEnumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
  }

  export type datos_prestamosUncheckedUpdateInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_cliente?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    cedula?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cant_cuotas?: NullableIntFieldUpdateOperationsInput | number | null
    frecuencia_pago?: NullableEnumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
  }

  export type datos_prestamosCreateManyInput = {
    id_prestamo: number
    id_cliente?: number | null
    nombre?: string | null
    cedula?: string | null
    telefono?: string | null
    direccion?: string | null
    foto_url?: string | null
    monto?: Decimal | DecimalJsLike | number | string | null
    interes?: Decimal | DecimalJsLike | number | string | null
    cant_cuotas?: number | null
    frecuencia_pago?: $Enums.frecuencia_pago | null
    fecha_inicio?: Date | string | null
    fecha_vencimiento?: Date | string | null
    estado?: $Enums.estado_prestamo | null
  }

  export type datos_prestamosUpdateManyMutationInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_cliente?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    cedula?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cant_cuotas?: NullableIntFieldUpdateOperationsInput | number | null
    frecuencia_pago?: NullableEnumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
  }

  export type datos_prestamosUncheckedUpdateManyInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_cliente?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    cedula?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    interes?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cant_cuotas?: NullableIntFieldUpdateOperationsInput | number | null
    frecuencia_pago?: NullableEnumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PrestamosListRelationFilter = {
    every?: prestamosWhereInput
    some?: prestamosWhereInput
    none?: prestamosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type prestamosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientesCountOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    foto_url?: SortOrder
    notas?: SortOrder
    referido_por?: SortOrder
    fecha_registro?: SortOrder
  }

  export type clientesAvgOrderByAggregateInput = {
    id_cliente?: SortOrder
  }

  export type clientesMaxOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    foto_url?: SortOrder
    notas?: SortOrder
    referido_por?: SortOrder
    fecha_registro?: SortOrder
  }

  export type clientesMinOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    direccion?: SortOrder
    foto_url?: SortOrder
    notas?: SortOrder
    referido_por?: SortOrder
    fecha_registro?: SortOrder
  }

  export type clientesSumOrderByAggregateInput = {
    id_cliente?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Enumestado_cuotaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_cuota | Enumestado_cuotaFieldRefInput<$PrismaModel> | null
    in?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumestado_cuotaNullableFilter<$PrismaModel> | $Enums.estado_cuota | null
  }

  export type PrestamosScalarRelationFilter = {
    is?: prestamosWhereInput
    isNot?: prestamosWhereInput
  }

  export type PagosListRelationFilter = {
    every?: pagosWhereInput
    some?: pagosWhereInput
    none?: pagosWhereInput
  }

  export type pagosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cuotasCountOrderByAggregateInput = {
    id_cuota?: SortOrder
    id_prestamo?: SortOrder
    numero?: SortOrder
    fecha_prevista?: SortOrder
    monto?: SortOrder
    monto_restante?: SortOrder
    intereses_mora?: SortOrder
    estado_pago?: SortOrder
  }

  export type cuotasAvgOrderByAggregateInput = {
    id_cuota?: SortOrder
    id_prestamo?: SortOrder
    numero?: SortOrder
    monto?: SortOrder
    monto_restante?: SortOrder
    intereses_mora?: SortOrder
  }

  export type cuotasMaxOrderByAggregateInput = {
    id_cuota?: SortOrder
    id_prestamo?: SortOrder
    numero?: SortOrder
    fecha_prevista?: SortOrder
    monto?: SortOrder
    monto_restante?: SortOrder
    intereses_mora?: SortOrder
    estado_pago?: SortOrder
  }

  export type cuotasMinOrderByAggregateInput = {
    id_cuota?: SortOrder
    id_prestamo?: SortOrder
    numero?: SortOrder
    fecha_prevista?: SortOrder
    monto?: SortOrder
    monto_restante?: SortOrder
    intereses_mora?: SortOrder
    estado_pago?: SortOrder
  }

  export type cuotasSumOrderByAggregateInput = {
    id_cuota?: SortOrder
    id_prestamo?: SortOrder
    numero?: SortOrder
    monto?: SortOrder
    monto_restante?: SortOrder
    intereses_mora?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Enumestado_cuotaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_cuota | Enumestado_cuotaFieldRefInput<$PrismaModel> | null
    in?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumestado_cuotaNullableWithAggregatesFilter<$PrismaModel> | $Enums.estado_cuota | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumestado_cuotaNullableFilter<$PrismaModel>
    _max?: NestedEnumestado_cuotaNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsuariosNullableScalarRelationFilter = {
    is?: usuariosWhereInput | null
    isNot?: usuariosWhereInput | null
  }

  export type logactividadCountOrderByAggregateInput = {
    id_log?: SortOrder
    id_usuario?: SortOrder
    accion?: SortOrder
    fecha_hora?: SortOrder
  }

  export type logactividadAvgOrderByAggregateInput = {
    id_log?: SortOrder
    id_usuario?: SortOrder
  }

  export type logactividadMaxOrderByAggregateInput = {
    id_log?: SortOrder
    id_usuario?: SortOrder
    accion?: SortOrder
    fecha_hora?: SortOrder
  }

  export type logactividadMinOrderByAggregateInput = {
    id_log?: SortOrder
    id_usuario?: SortOrder
    accion?: SortOrder
    fecha_hora?: SortOrder
  }

  export type logactividadSumOrderByAggregateInput = {
    id_log?: SortOrder
    id_usuario?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumtipo_movimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_movimiento | Enumtipo_movimientoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_movimientoFilter<$PrismaModel> | $Enums.tipo_movimiento
  }

  export type movimientoscajaCountOrderByAggregateInput = {
    id_movimiento?: SortOrder
    tipo?: SortOrder
    prestamo_id?: SortOrder
    pago_id?: SortOrder
    descripcion?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    usuario_id?: SortOrder
  }

  export type movimientoscajaAvgOrderByAggregateInput = {
    id_movimiento?: SortOrder
    prestamo_id?: SortOrder
    pago_id?: SortOrder
    monto?: SortOrder
    usuario_id?: SortOrder
  }

  export type movimientoscajaMaxOrderByAggregateInput = {
    id_movimiento?: SortOrder
    tipo?: SortOrder
    prestamo_id?: SortOrder
    pago_id?: SortOrder
    descripcion?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    usuario_id?: SortOrder
  }

  export type movimientoscajaMinOrderByAggregateInput = {
    id_movimiento?: SortOrder
    tipo?: SortOrder
    prestamo_id?: SortOrder
    pago_id?: SortOrder
    descripcion?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    usuario_id?: SortOrder
  }

  export type movimientoscajaSumOrderByAggregateInput = {
    id_movimiento?: SortOrder
    prestamo_id?: SortOrder
    pago_id?: SortOrder
    monto?: SortOrder
    usuario_id?: SortOrder
  }

  export type Enumtipo_movimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_movimiento | Enumtipo_movimientoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_movimientoWithAggregatesFilter<$PrismaModel> | $Enums.tipo_movimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_movimientoFilter<$PrismaModel>
    _max?: NestedEnumtipo_movimientoFilter<$PrismaModel>
  }

  export type Enumforma_pagoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.forma_pago | Enumforma_pagoFieldRefInput<$PrismaModel> | null
    in?: $Enums.forma_pago[] | ListEnumforma_pagoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.forma_pago[] | ListEnumforma_pagoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumforma_pagoNullableFilter<$PrismaModel> | $Enums.forma_pago | null
  }

  export type CuotasScalarRelationFilter = {
    is?: cuotasWhereInput
    isNot?: cuotasWhereInput
  }

  export type pagosCountOrderByAggregateInput = {
    id_pago?: SortOrder
    id_cuota?: SortOrder
    fecha_pago?: SortOrder
    monto_pagado?: SortOrder
    forma_pago?: SortOrder
    recibo_numero?: SortOrder
    cobrador_id?: SortOrder
    observaciones?: SortOrder
  }

  export type pagosAvgOrderByAggregateInput = {
    id_pago?: SortOrder
    id_cuota?: SortOrder
    monto_pagado?: SortOrder
    recibo_numero?: SortOrder
    cobrador_id?: SortOrder
  }

  export type pagosMaxOrderByAggregateInput = {
    id_pago?: SortOrder
    id_cuota?: SortOrder
    fecha_pago?: SortOrder
    monto_pagado?: SortOrder
    forma_pago?: SortOrder
    recibo_numero?: SortOrder
    cobrador_id?: SortOrder
    observaciones?: SortOrder
  }

  export type pagosMinOrderByAggregateInput = {
    id_pago?: SortOrder
    id_cuota?: SortOrder
    fecha_pago?: SortOrder
    monto_pagado?: SortOrder
    forma_pago?: SortOrder
    recibo_numero?: SortOrder
    cobrador_id?: SortOrder
    observaciones?: SortOrder
  }

  export type pagosSumOrderByAggregateInput = {
    id_pago?: SortOrder
    id_cuota?: SortOrder
    monto_pagado?: SortOrder
    recibo_numero?: SortOrder
    cobrador_id?: SortOrder
  }

  export type Enumforma_pagoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.forma_pago | Enumforma_pagoFieldRefInput<$PrismaModel> | null
    in?: $Enums.forma_pago[] | ListEnumforma_pagoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.forma_pago[] | ListEnumforma_pagoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumforma_pagoNullableWithAggregatesFilter<$PrismaModel> | $Enums.forma_pago | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumforma_pagoNullableFilter<$PrismaModel>
    _max?: NestedEnumforma_pagoNullableFilter<$PrismaModel>
  }

  export type Enumtipo_interesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_interes | Enumtipo_interesFieldRefInput<$PrismaModel> | null
    in?: $Enums.tipo_interes[] | ListEnumtipo_interesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.tipo_interes[] | ListEnumtipo_interesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtipo_interesNullableFilter<$PrismaModel> | $Enums.tipo_interes | null
  }

  export type Enumfrecuencia_pagoFilter<$PrismaModel = never> = {
    equals?: $Enums.frecuencia_pago | Enumfrecuencia_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel>
    not?: NestedEnumfrecuencia_pagoFilter<$PrismaModel> | $Enums.frecuencia_pago
  }

  export type Enumestado_prestamoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_prestamo | Enumestado_prestamoFieldRefInput<$PrismaModel> | null
    in?: $Enums.estado_prestamo[] | ListEnumestado_prestamoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.estado_prestamo[] | ListEnumestado_prestamoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumestado_prestamoNullableFilter<$PrismaModel> | $Enums.estado_prestamo | null
  }

  export type CuotasListRelationFilter = {
    every?: cuotasWhereInput
    some?: cuotasWhereInput
    none?: cuotasWhereInput
  }

  export type ClientesScalarRelationFilter = {
    is?: clientesWhereInput
    isNot?: clientesWhereInput
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type cuotasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type prestamosCountOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_cliente?: SortOrder
    monto?: SortOrder
    interes?: SortOrder
    total_pagado?: SortOrder
    tipo_interes?: SortOrder
    id_usuario?: SortOrder
    cant_cuotas?: SortOrder
    frecuencia_pago?: SortOrder
    fecha_inicio?: SortOrder
    fecha_vencimiento?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
  }

  export type prestamosAvgOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_cliente?: SortOrder
    monto?: SortOrder
    interes?: SortOrder
    total_pagado?: SortOrder
    id_usuario?: SortOrder
    cant_cuotas?: SortOrder
  }

  export type prestamosMaxOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_cliente?: SortOrder
    monto?: SortOrder
    interes?: SortOrder
    total_pagado?: SortOrder
    tipo_interes?: SortOrder
    id_usuario?: SortOrder
    cant_cuotas?: SortOrder
    frecuencia_pago?: SortOrder
    fecha_inicio?: SortOrder
    fecha_vencimiento?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
  }

  export type prestamosMinOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_cliente?: SortOrder
    monto?: SortOrder
    interes?: SortOrder
    total_pagado?: SortOrder
    tipo_interes?: SortOrder
    id_usuario?: SortOrder
    cant_cuotas?: SortOrder
    frecuencia_pago?: SortOrder
    fecha_inicio?: SortOrder
    fecha_vencimiento?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
  }

  export type prestamosSumOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_cliente?: SortOrder
    monto?: SortOrder
    interes?: SortOrder
    total_pagado?: SortOrder
    id_usuario?: SortOrder
    cant_cuotas?: SortOrder
  }

  export type Enumtipo_interesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_interes | Enumtipo_interesFieldRefInput<$PrismaModel> | null
    in?: $Enums.tipo_interes[] | ListEnumtipo_interesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.tipo_interes[] | ListEnumtipo_interesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtipo_interesNullableWithAggregatesFilter<$PrismaModel> | $Enums.tipo_interes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtipo_interesNullableFilter<$PrismaModel>
    _max?: NestedEnumtipo_interesNullableFilter<$PrismaModel>
  }

  export type Enumfrecuencia_pagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.frecuencia_pago | Enumfrecuencia_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel>
    not?: NestedEnumfrecuencia_pagoWithAggregatesFilter<$PrismaModel> | $Enums.frecuencia_pago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumfrecuencia_pagoFilter<$PrismaModel>
    _max?: NestedEnumfrecuencia_pagoFilter<$PrismaModel>
  }

  export type Enumestado_prestamoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_prestamo | Enumestado_prestamoFieldRefInput<$PrismaModel> | null
    in?: $Enums.estado_prestamo[] | ListEnumestado_prestamoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.estado_prestamo[] | ListEnumestado_prestamoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumestado_prestamoNullableWithAggregatesFilter<$PrismaModel> | $Enums.estado_prestamo | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumestado_prestamoNullableFilter<$PrismaModel>
    _max?: NestedEnumestado_prestamoNullableFilter<$PrismaModel>
  }

  export type EnumrolFilter<$PrismaModel = never> = {
    equals?: $Enums.rol | EnumrolFieldRefInput<$PrismaModel>
    in?: $Enums.rol[] | ListEnumrolFieldRefInput<$PrismaModel>
    notIn?: $Enums.rol[] | ListEnumrolFieldRefInput<$PrismaModel>
    not?: NestedEnumrolFilter<$PrismaModel> | $Enums.rol
  }

  export type Enumestado_usuarioNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_usuario | Enumestado_usuarioFieldRefInput<$PrismaModel> | null
    in?: $Enums.estado_usuario[] | ListEnumestado_usuarioFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.estado_usuario[] | ListEnumestado_usuarioFieldRefInput<$PrismaModel> | null
    not?: NestedEnumestado_usuarioNullableFilter<$PrismaModel> | $Enums.estado_usuario | null
  }

  export type LogactividadListRelationFilter = {
    every?: logactividadWhereInput
    some?: logactividadWhereInput
    none?: logactividadWhereInput
  }

  export type MovimientoscajaListRelationFilter = {
    every?: movimientoscajaWhereInput
    some?: movimientoscajaWhereInput
    none?: movimientoscajaWhereInput
  }

  export type logactividadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type movimientoscajaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    clave_hash?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrder
    ultimo_acceso?: SortOrder
    fecha_baja?: SortOrder
    razon_baja?: SortOrder
    estado?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    clave_hash?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrder
    ultimo_acceso?: SortOrder
    fecha_baja?: SortOrder
    razon_baja?: SortOrder
    estado?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    clave_hash?: SortOrder
    rol?: SortOrder
    fecha_creacion?: SortOrder
    ultimo_acceso?: SortOrder
    fecha_baja?: SortOrder
    razon_baja?: SortOrder
    estado?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type EnumrolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rol | EnumrolFieldRefInput<$PrismaModel>
    in?: $Enums.rol[] | ListEnumrolFieldRefInput<$PrismaModel>
    notIn?: $Enums.rol[] | ListEnumrolFieldRefInput<$PrismaModel>
    not?: NestedEnumrolWithAggregatesFilter<$PrismaModel> | $Enums.rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrolFilter<$PrismaModel>
    _max?: NestedEnumrolFilter<$PrismaModel>
  }

  export type Enumestado_usuarioNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_usuario | Enumestado_usuarioFieldRefInput<$PrismaModel> | null
    in?: $Enums.estado_usuario[] | ListEnumestado_usuarioFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.estado_usuario[] | ListEnumestado_usuarioFieldRefInput<$PrismaModel> | null
    not?: NestedEnumestado_usuarioNullableWithAggregatesFilter<$PrismaModel> | $Enums.estado_usuario | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumestado_usuarioNullableFilter<$PrismaModel>
    _max?: NestedEnumestado_usuarioNullableFilter<$PrismaModel>
  }

  export type Enumfrecuencia_pagoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.frecuencia_pago | Enumfrecuencia_pagoFieldRefInput<$PrismaModel> | null
    in?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfrecuencia_pagoNullableFilter<$PrismaModel> | $Enums.frecuencia_pago | null
  }

  export type datos_prestamosCountOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_cliente?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    foto_url?: SortOrder
    monto?: SortOrder
    interes?: SortOrder
    cant_cuotas?: SortOrder
    frecuencia_pago?: SortOrder
    fecha_inicio?: SortOrder
    fecha_vencimiento?: SortOrder
    estado?: SortOrder
  }

  export type datos_prestamosAvgOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_cliente?: SortOrder
    monto?: SortOrder
    interes?: SortOrder
    cant_cuotas?: SortOrder
  }

  export type datos_prestamosMaxOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_cliente?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    foto_url?: SortOrder
    monto?: SortOrder
    interes?: SortOrder
    cant_cuotas?: SortOrder
    frecuencia_pago?: SortOrder
    fecha_inicio?: SortOrder
    fecha_vencimiento?: SortOrder
    estado?: SortOrder
  }

  export type datos_prestamosMinOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_cliente?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    foto_url?: SortOrder
    monto?: SortOrder
    interes?: SortOrder
    cant_cuotas?: SortOrder
    frecuencia_pago?: SortOrder
    fecha_inicio?: SortOrder
    fecha_vencimiento?: SortOrder
    estado?: SortOrder
  }

  export type datos_prestamosSumOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_cliente?: SortOrder
    monto?: SortOrder
    interes?: SortOrder
    cant_cuotas?: SortOrder
  }

  export type Enumfrecuencia_pagoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.frecuencia_pago | Enumfrecuencia_pagoFieldRefInput<$PrismaModel> | null
    in?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfrecuencia_pagoNullableWithAggregatesFilter<$PrismaModel> | $Enums.frecuencia_pago | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfrecuencia_pagoNullableFilter<$PrismaModel>
    _max?: NestedEnumfrecuencia_pagoNullableFilter<$PrismaModel>
  }

  export type prestamosCreateNestedManyWithoutClientesInput = {
    create?: XOR<prestamosCreateWithoutClientesInput, prestamosUncheckedCreateWithoutClientesInput> | prestamosCreateWithoutClientesInput[] | prestamosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutClientesInput | prestamosCreateOrConnectWithoutClientesInput[]
    createMany?: prestamosCreateManyClientesInputEnvelope
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
  }

  export type prestamosUncheckedCreateNestedManyWithoutClientesInput = {
    create?: XOR<prestamosCreateWithoutClientesInput, prestamosUncheckedCreateWithoutClientesInput> | prestamosCreateWithoutClientesInput[] | prestamosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutClientesInput | prestamosCreateOrConnectWithoutClientesInput[]
    createMany?: prestamosCreateManyClientesInputEnvelope
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type prestamosUpdateManyWithoutClientesNestedInput = {
    create?: XOR<prestamosCreateWithoutClientesInput, prestamosUncheckedCreateWithoutClientesInput> | prestamosCreateWithoutClientesInput[] | prestamosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutClientesInput | prestamosCreateOrConnectWithoutClientesInput[]
    upsert?: prestamosUpsertWithWhereUniqueWithoutClientesInput | prestamosUpsertWithWhereUniqueWithoutClientesInput[]
    createMany?: prestamosCreateManyClientesInputEnvelope
    set?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    disconnect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    delete?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    update?: prestamosUpdateWithWhereUniqueWithoutClientesInput | prestamosUpdateWithWhereUniqueWithoutClientesInput[]
    updateMany?: prestamosUpdateManyWithWhereWithoutClientesInput | prestamosUpdateManyWithWhereWithoutClientesInput[]
    deleteMany?: prestamosScalarWhereInput | prestamosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type prestamosUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: XOR<prestamosCreateWithoutClientesInput, prestamosUncheckedCreateWithoutClientesInput> | prestamosCreateWithoutClientesInput[] | prestamosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutClientesInput | prestamosCreateOrConnectWithoutClientesInput[]
    upsert?: prestamosUpsertWithWhereUniqueWithoutClientesInput | prestamosUpsertWithWhereUniqueWithoutClientesInput[]
    createMany?: prestamosCreateManyClientesInputEnvelope
    set?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    disconnect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    delete?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    update?: prestamosUpdateWithWhereUniqueWithoutClientesInput | prestamosUpdateWithWhereUniqueWithoutClientesInput[]
    updateMany?: prestamosUpdateManyWithWhereWithoutClientesInput | prestamosUpdateManyWithWhereWithoutClientesInput[]
    deleteMany?: prestamosScalarWhereInput | prestamosScalarWhereInput[]
  }

  export type prestamosCreateNestedOneWithoutCuotasInput = {
    create?: XOR<prestamosCreateWithoutCuotasInput, prestamosUncheckedCreateWithoutCuotasInput>
    connectOrCreate?: prestamosCreateOrConnectWithoutCuotasInput
    connect?: prestamosWhereUniqueInput
  }

  export type pagosCreateNestedManyWithoutCuotasInput = {
    create?: XOR<pagosCreateWithoutCuotasInput, pagosUncheckedCreateWithoutCuotasInput> | pagosCreateWithoutCuotasInput[] | pagosUncheckedCreateWithoutCuotasInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutCuotasInput | pagosCreateOrConnectWithoutCuotasInput[]
    createMany?: pagosCreateManyCuotasInputEnvelope
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
  }

  export type pagosUncheckedCreateNestedManyWithoutCuotasInput = {
    create?: XOR<pagosCreateWithoutCuotasInput, pagosUncheckedCreateWithoutCuotasInput> | pagosCreateWithoutCuotasInput[] | pagosUncheckedCreateWithoutCuotasInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutCuotasInput | pagosCreateOrConnectWithoutCuotasInput[]
    createMany?: pagosCreateManyCuotasInputEnvelope
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumestado_cuotaFieldUpdateOperationsInput = {
    set?: $Enums.estado_cuota | null
  }

  export type prestamosUpdateOneRequiredWithoutCuotasNestedInput = {
    create?: XOR<prestamosCreateWithoutCuotasInput, prestamosUncheckedCreateWithoutCuotasInput>
    connectOrCreate?: prestamosCreateOrConnectWithoutCuotasInput
    upsert?: prestamosUpsertWithoutCuotasInput
    connect?: prestamosWhereUniqueInput
    update?: XOR<XOR<prestamosUpdateToOneWithWhereWithoutCuotasInput, prestamosUpdateWithoutCuotasInput>, prestamosUncheckedUpdateWithoutCuotasInput>
  }

  export type pagosUpdateManyWithoutCuotasNestedInput = {
    create?: XOR<pagosCreateWithoutCuotasInput, pagosUncheckedCreateWithoutCuotasInput> | pagosCreateWithoutCuotasInput[] | pagosUncheckedCreateWithoutCuotasInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutCuotasInput | pagosCreateOrConnectWithoutCuotasInput[]
    upsert?: pagosUpsertWithWhereUniqueWithoutCuotasInput | pagosUpsertWithWhereUniqueWithoutCuotasInput[]
    createMany?: pagosCreateManyCuotasInputEnvelope
    set?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    disconnect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    delete?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    update?: pagosUpdateWithWhereUniqueWithoutCuotasInput | pagosUpdateWithWhereUniqueWithoutCuotasInput[]
    updateMany?: pagosUpdateManyWithWhereWithoutCuotasInput | pagosUpdateManyWithWhereWithoutCuotasInput[]
    deleteMany?: pagosScalarWhereInput | pagosScalarWhereInput[]
  }

  export type pagosUncheckedUpdateManyWithoutCuotasNestedInput = {
    create?: XOR<pagosCreateWithoutCuotasInput, pagosUncheckedCreateWithoutCuotasInput> | pagosCreateWithoutCuotasInput[] | pagosUncheckedCreateWithoutCuotasInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutCuotasInput | pagosCreateOrConnectWithoutCuotasInput[]
    upsert?: pagosUpsertWithWhereUniqueWithoutCuotasInput | pagosUpsertWithWhereUniqueWithoutCuotasInput[]
    createMany?: pagosCreateManyCuotasInputEnvelope
    set?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    disconnect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    delete?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    update?: pagosUpdateWithWhereUniqueWithoutCuotasInput | pagosUpdateWithWhereUniqueWithoutCuotasInput[]
    updateMany?: pagosUpdateManyWithWhereWithoutCuotasInput | pagosUpdateManyWithWhereWithoutCuotasInput[]
    deleteMany?: pagosScalarWhereInput | pagosScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutLogactividadInput = {
    create?: XOR<usuariosCreateWithoutLogactividadInput, usuariosUncheckedCreateWithoutLogactividadInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutLogactividadInput
    connect?: usuariosWhereUniqueInput
  }

  export type usuariosUpdateOneWithoutLogactividadNestedInput = {
    create?: XOR<usuariosCreateWithoutLogactividadInput, usuariosUncheckedCreateWithoutLogactividadInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutLogactividadInput
    upsert?: usuariosUpsertWithoutLogactividadInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutLogactividadInput, usuariosUpdateWithoutLogactividadInput>, usuariosUncheckedUpdateWithoutLogactividadInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usuariosCreateNestedOneWithoutMovimientoscajaInput = {
    create?: XOR<usuariosCreateWithoutMovimientoscajaInput, usuariosUncheckedCreateWithoutMovimientoscajaInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutMovimientoscajaInput
    connect?: usuariosWhereUniqueInput
  }

  export type Enumtipo_movimientoFieldUpdateOperationsInput = {
    set?: $Enums.tipo_movimiento
  }

  export type usuariosUpdateOneWithoutMovimientoscajaNestedInput = {
    create?: XOR<usuariosCreateWithoutMovimientoscajaInput, usuariosUncheckedCreateWithoutMovimientoscajaInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutMovimientoscajaInput
    upsert?: usuariosUpsertWithoutMovimientoscajaInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutMovimientoscajaInput, usuariosUpdateWithoutMovimientoscajaInput>, usuariosUncheckedUpdateWithoutMovimientoscajaInput>
  }

  export type usuariosCreateNestedOneWithoutPagosInput = {
    create?: XOR<usuariosCreateWithoutPagosInput, usuariosUncheckedCreateWithoutPagosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPagosInput
    connect?: usuariosWhereUniqueInput
  }

  export type cuotasCreateNestedOneWithoutPagosInput = {
    create?: XOR<cuotasCreateWithoutPagosInput, cuotasUncheckedCreateWithoutPagosInput>
    connectOrCreate?: cuotasCreateOrConnectWithoutPagosInput
    connect?: cuotasWhereUniqueInput
  }

  export type NullableEnumforma_pagoFieldUpdateOperationsInput = {
    set?: $Enums.forma_pago | null
  }

  export type usuariosUpdateOneWithoutPagosNestedInput = {
    create?: XOR<usuariosCreateWithoutPagosInput, usuariosUncheckedCreateWithoutPagosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPagosInput
    upsert?: usuariosUpsertWithoutPagosInput
    disconnect?: usuariosWhereInput | boolean
    delete?: usuariosWhereInput | boolean
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutPagosInput, usuariosUpdateWithoutPagosInput>, usuariosUncheckedUpdateWithoutPagosInput>
  }

  export type cuotasUpdateOneRequiredWithoutPagosNestedInput = {
    create?: XOR<cuotasCreateWithoutPagosInput, cuotasUncheckedCreateWithoutPagosInput>
    connectOrCreate?: cuotasCreateOrConnectWithoutPagosInput
    upsert?: cuotasUpsertWithoutPagosInput
    connect?: cuotasWhereUniqueInput
    update?: XOR<XOR<cuotasUpdateToOneWithWhereWithoutPagosInput, cuotasUpdateWithoutPagosInput>, cuotasUncheckedUpdateWithoutPagosInput>
  }

  export type cuotasCreateNestedManyWithoutPrestamosInput = {
    create?: XOR<cuotasCreateWithoutPrestamosInput, cuotasUncheckedCreateWithoutPrestamosInput> | cuotasCreateWithoutPrestamosInput[] | cuotasUncheckedCreateWithoutPrestamosInput[]
    connectOrCreate?: cuotasCreateOrConnectWithoutPrestamosInput | cuotasCreateOrConnectWithoutPrestamosInput[]
    createMany?: cuotasCreateManyPrestamosInputEnvelope
    connect?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
  }

  export type clientesCreateNestedOneWithoutPrestamosInput = {
    create?: XOR<clientesCreateWithoutPrestamosInput, clientesUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: clientesCreateOrConnectWithoutPrestamosInput
    connect?: clientesWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutPrestamosInput = {
    create?: XOR<usuariosCreateWithoutPrestamosInput, usuariosUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPrestamosInput
    connect?: usuariosWhereUniqueInput
  }

  export type cuotasUncheckedCreateNestedManyWithoutPrestamosInput = {
    create?: XOR<cuotasCreateWithoutPrestamosInput, cuotasUncheckedCreateWithoutPrestamosInput> | cuotasCreateWithoutPrestamosInput[] | cuotasUncheckedCreateWithoutPrestamosInput[]
    connectOrCreate?: cuotasCreateOrConnectWithoutPrestamosInput | cuotasCreateOrConnectWithoutPrestamosInput[]
    createMany?: cuotasCreateManyPrestamosInputEnvelope
    connect?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
  }

  export type NullableEnumtipo_interesFieldUpdateOperationsInput = {
    set?: $Enums.tipo_interes | null
  }

  export type Enumfrecuencia_pagoFieldUpdateOperationsInput = {
    set?: $Enums.frecuencia_pago
  }

  export type NullableEnumestado_prestamoFieldUpdateOperationsInput = {
    set?: $Enums.estado_prestamo | null
  }

  export type cuotasUpdateManyWithoutPrestamosNestedInput = {
    create?: XOR<cuotasCreateWithoutPrestamosInput, cuotasUncheckedCreateWithoutPrestamosInput> | cuotasCreateWithoutPrestamosInput[] | cuotasUncheckedCreateWithoutPrestamosInput[]
    connectOrCreate?: cuotasCreateOrConnectWithoutPrestamosInput | cuotasCreateOrConnectWithoutPrestamosInput[]
    upsert?: cuotasUpsertWithWhereUniqueWithoutPrestamosInput | cuotasUpsertWithWhereUniqueWithoutPrestamosInput[]
    createMany?: cuotasCreateManyPrestamosInputEnvelope
    set?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    disconnect?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    delete?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    connect?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    update?: cuotasUpdateWithWhereUniqueWithoutPrestamosInput | cuotasUpdateWithWhereUniqueWithoutPrestamosInput[]
    updateMany?: cuotasUpdateManyWithWhereWithoutPrestamosInput | cuotasUpdateManyWithWhereWithoutPrestamosInput[]
    deleteMany?: cuotasScalarWhereInput | cuotasScalarWhereInput[]
  }

  export type clientesUpdateOneRequiredWithoutPrestamosNestedInput = {
    create?: XOR<clientesCreateWithoutPrestamosInput, clientesUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: clientesCreateOrConnectWithoutPrestamosInput
    upsert?: clientesUpsertWithoutPrestamosInput
    connect?: clientesWhereUniqueInput
    update?: XOR<XOR<clientesUpdateToOneWithWhereWithoutPrestamosInput, clientesUpdateWithoutPrestamosInput>, clientesUncheckedUpdateWithoutPrestamosInput>
  }

  export type usuariosUpdateOneRequiredWithoutPrestamosNestedInput = {
    create?: XOR<usuariosCreateWithoutPrestamosInput, usuariosUncheckedCreateWithoutPrestamosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPrestamosInput
    upsert?: usuariosUpsertWithoutPrestamosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutPrestamosInput, usuariosUpdateWithoutPrestamosInput>, usuariosUncheckedUpdateWithoutPrestamosInput>
  }

  export type cuotasUncheckedUpdateManyWithoutPrestamosNestedInput = {
    create?: XOR<cuotasCreateWithoutPrestamosInput, cuotasUncheckedCreateWithoutPrestamosInput> | cuotasCreateWithoutPrestamosInput[] | cuotasUncheckedCreateWithoutPrestamosInput[]
    connectOrCreate?: cuotasCreateOrConnectWithoutPrestamosInput | cuotasCreateOrConnectWithoutPrestamosInput[]
    upsert?: cuotasUpsertWithWhereUniqueWithoutPrestamosInput | cuotasUpsertWithWhereUniqueWithoutPrestamosInput[]
    createMany?: cuotasCreateManyPrestamosInputEnvelope
    set?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    disconnect?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    delete?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    connect?: cuotasWhereUniqueInput | cuotasWhereUniqueInput[]
    update?: cuotasUpdateWithWhereUniqueWithoutPrestamosInput | cuotasUpdateWithWhereUniqueWithoutPrestamosInput[]
    updateMany?: cuotasUpdateManyWithWhereWithoutPrestamosInput | cuotasUpdateManyWithWhereWithoutPrestamosInput[]
    deleteMany?: cuotasScalarWhereInput | cuotasScalarWhereInput[]
  }

  export type logactividadCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<logactividadCreateWithoutUsuariosInput, logactividadUncheckedCreateWithoutUsuariosInput> | logactividadCreateWithoutUsuariosInput[] | logactividadUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: logactividadCreateOrConnectWithoutUsuariosInput | logactividadCreateOrConnectWithoutUsuariosInput[]
    createMany?: logactividadCreateManyUsuariosInputEnvelope
    connect?: logactividadWhereUniqueInput | logactividadWhereUniqueInput[]
  }

  export type movimientoscajaCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<movimientoscajaCreateWithoutUsuariosInput, movimientoscajaUncheckedCreateWithoutUsuariosInput> | movimientoscajaCreateWithoutUsuariosInput[] | movimientoscajaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: movimientoscajaCreateOrConnectWithoutUsuariosInput | movimientoscajaCreateOrConnectWithoutUsuariosInput[]
    createMany?: movimientoscajaCreateManyUsuariosInputEnvelope
    connect?: movimientoscajaWhereUniqueInput | movimientoscajaWhereUniqueInput[]
  }

  export type pagosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<pagosCreateWithoutUsuariosInput, pagosUncheckedCreateWithoutUsuariosInput> | pagosCreateWithoutUsuariosInput[] | pagosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutUsuariosInput | pagosCreateOrConnectWithoutUsuariosInput[]
    createMany?: pagosCreateManyUsuariosInputEnvelope
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
  }

  export type prestamosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<prestamosCreateWithoutUsuariosInput, prestamosUncheckedCreateWithoutUsuariosInput> | prestamosCreateWithoutUsuariosInput[] | prestamosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutUsuariosInput | prestamosCreateOrConnectWithoutUsuariosInput[]
    createMany?: prestamosCreateManyUsuariosInputEnvelope
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
  }

  export type logactividadUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<logactividadCreateWithoutUsuariosInput, logactividadUncheckedCreateWithoutUsuariosInput> | logactividadCreateWithoutUsuariosInput[] | logactividadUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: logactividadCreateOrConnectWithoutUsuariosInput | logactividadCreateOrConnectWithoutUsuariosInput[]
    createMany?: logactividadCreateManyUsuariosInputEnvelope
    connect?: logactividadWhereUniqueInput | logactividadWhereUniqueInput[]
  }

  export type movimientoscajaUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<movimientoscajaCreateWithoutUsuariosInput, movimientoscajaUncheckedCreateWithoutUsuariosInput> | movimientoscajaCreateWithoutUsuariosInput[] | movimientoscajaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: movimientoscajaCreateOrConnectWithoutUsuariosInput | movimientoscajaCreateOrConnectWithoutUsuariosInput[]
    createMany?: movimientoscajaCreateManyUsuariosInputEnvelope
    connect?: movimientoscajaWhereUniqueInput | movimientoscajaWhereUniqueInput[]
  }

  export type pagosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<pagosCreateWithoutUsuariosInput, pagosUncheckedCreateWithoutUsuariosInput> | pagosCreateWithoutUsuariosInput[] | pagosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutUsuariosInput | pagosCreateOrConnectWithoutUsuariosInput[]
    createMany?: pagosCreateManyUsuariosInputEnvelope
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
  }

  export type prestamosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<prestamosCreateWithoutUsuariosInput, prestamosUncheckedCreateWithoutUsuariosInput> | prestamosCreateWithoutUsuariosInput[] | prestamosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutUsuariosInput | prestamosCreateOrConnectWithoutUsuariosInput[]
    createMany?: prestamosCreateManyUsuariosInputEnvelope
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
  }

  export type EnumrolFieldUpdateOperationsInput = {
    set?: $Enums.rol
  }

  export type NullableEnumestado_usuarioFieldUpdateOperationsInput = {
    set?: $Enums.estado_usuario | null
  }

  export type logactividadUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<logactividadCreateWithoutUsuariosInput, logactividadUncheckedCreateWithoutUsuariosInput> | logactividadCreateWithoutUsuariosInput[] | logactividadUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: logactividadCreateOrConnectWithoutUsuariosInput | logactividadCreateOrConnectWithoutUsuariosInput[]
    upsert?: logactividadUpsertWithWhereUniqueWithoutUsuariosInput | logactividadUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: logactividadCreateManyUsuariosInputEnvelope
    set?: logactividadWhereUniqueInput | logactividadWhereUniqueInput[]
    disconnect?: logactividadWhereUniqueInput | logactividadWhereUniqueInput[]
    delete?: logactividadWhereUniqueInput | logactividadWhereUniqueInput[]
    connect?: logactividadWhereUniqueInput | logactividadWhereUniqueInput[]
    update?: logactividadUpdateWithWhereUniqueWithoutUsuariosInput | logactividadUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: logactividadUpdateManyWithWhereWithoutUsuariosInput | logactividadUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: logactividadScalarWhereInput | logactividadScalarWhereInput[]
  }

  export type movimientoscajaUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<movimientoscajaCreateWithoutUsuariosInput, movimientoscajaUncheckedCreateWithoutUsuariosInput> | movimientoscajaCreateWithoutUsuariosInput[] | movimientoscajaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: movimientoscajaCreateOrConnectWithoutUsuariosInput | movimientoscajaCreateOrConnectWithoutUsuariosInput[]
    upsert?: movimientoscajaUpsertWithWhereUniqueWithoutUsuariosInput | movimientoscajaUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: movimientoscajaCreateManyUsuariosInputEnvelope
    set?: movimientoscajaWhereUniqueInput | movimientoscajaWhereUniqueInput[]
    disconnect?: movimientoscajaWhereUniqueInput | movimientoscajaWhereUniqueInput[]
    delete?: movimientoscajaWhereUniqueInput | movimientoscajaWhereUniqueInput[]
    connect?: movimientoscajaWhereUniqueInput | movimientoscajaWhereUniqueInput[]
    update?: movimientoscajaUpdateWithWhereUniqueWithoutUsuariosInput | movimientoscajaUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: movimientoscajaUpdateManyWithWhereWithoutUsuariosInput | movimientoscajaUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: movimientoscajaScalarWhereInput | movimientoscajaScalarWhereInput[]
  }

  export type pagosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<pagosCreateWithoutUsuariosInput, pagosUncheckedCreateWithoutUsuariosInput> | pagosCreateWithoutUsuariosInput[] | pagosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutUsuariosInput | pagosCreateOrConnectWithoutUsuariosInput[]
    upsert?: pagosUpsertWithWhereUniqueWithoutUsuariosInput | pagosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: pagosCreateManyUsuariosInputEnvelope
    set?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    disconnect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    delete?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    update?: pagosUpdateWithWhereUniqueWithoutUsuariosInput | pagosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: pagosUpdateManyWithWhereWithoutUsuariosInput | pagosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: pagosScalarWhereInput | pagosScalarWhereInput[]
  }

  export type prestamosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<prestamosCreateWithoutUsuariosInput, prestamosUncheckedCreateWithoutUsuariosInput> | prestamosCreateWithoutUsuariosInput[] | prestamosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutUsuariosInput | prestamosCreateOrConnectWithoutUsuariosInput[]
    upsert?: prestamosUpsertWithWhereUniqueWithoutUsuariosInput | prestamosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: prestamosCreateManyUsuariosInputEnvelope
    set?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    disconnect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    delete?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    update?: prestamosUpdateWithWhereUniqueWithoutUsuariosInput | prestamosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: prestamosUpdateManyWithWhereWithoutUsuariosInput | prestamosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: prestamosScalarWhereInput | prestamosScalarWhereInput[]
  }

  export type logactividadUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<logactividadCreateWithoutUsuariosInput, logactividadUncheckedCreateWithoutUsuariosInput> | logactividadCreateWithoutUsuariosInput[] | logactividadUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: logactividadCreateOrConnectWithoutUsuariosInput | logactividadCreateOrConnectWithoutUsuariosInput[]
    upsert?: logactividadUpsertWithWhereUniqueWithoutUsuariosInput | logactividadUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: logactividadCreateManyUsuariosInputEnvelope
    set?: logactividadWhereUniqueInput | logactividadWhereUniqueInput[]
    disconnect?: logactividadWhereUniqueInput | logactividadWhereUniqueInput[]
    delete?: logactividadWhereUniqueInput | logactividadWhereUniqueInput[]
    connect?: logactividadWhereUniqueInput | logactividadWhereUniqueInput[]
    update?: logactividadUpdateWithWhereUniqueWithoutUsuariosInput | logactividadUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: logactividadUpdateManyWithWhereWithoutUsuariosInput | logactividadUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: logactividadScalarWhereInput | logactividadScalarWhereInput[]
  }

  export type movimientoscajaUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<movimientoscajaCreateWithoutUsuariosInput, movimientoscajaUncheckedCreateWithoutUsuariosInput> | movimientoscajaCreateWithoutUsuariosInput[] | movimientoscajaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: movimientoscajaCreateOrConnectWithoutUsuariosInput | movimientoscajaCreateOrConnectWithoutUsuariosInput[]
    upsert?: movimientoscajaUpsertWithWhereUniqueWithoutUsuariosInput | movimientoscajaUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: movimientoscajaCreateManyUsuariosInputEnvelope
    set?: movimientoscajaWhereUniqueInput | movimientoscajaWhereUniqueInput[]
    disconnect?: movimientoscajaWhereUniqueInput | movimientoscajaWhereUniqueInput[]
    delete?: movimientoscajaWhereUniqueInput | movimientoscajaWhereUniqueInput[]
    connect?: movimientoscajaWhereUniqueInput | movimientoscajaWhereUniqueInput[]
    update?: movimientoscajaUpdateWithWhereUniqueWithoutUsuariosInput | movimientoscajaUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: movimientoscajaUpdateManyWithWhereWithoutUsuariosInput | movimientoscajaUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: movimientoscajaScalarWhereInput | movimientoscajaScalarWhereInput[]
  }

  export type pagosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<pagosCreateWithoutUsuariosInput, pagosUncheckedCreateWithoutUsuariosInput> | pagosCreateWithoutUsuariosInput[] | pagosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: pagosCreateOrConnectWithoutUsuariosInput | pagosCreateOrConnectWithoutUsuariosInput[]
    upsert?: pagosUpsertWithWhereUniqueWithoutUsuariosInput | pagosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: pagosCreateManyUsuariosInputEnvelope
    set?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    disconnect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    delete?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    connect?: pagosWhereUniqueInput | pagosWhereUniqueInput[]
    update?: pagosUpdateWithWhereUniqueWithoutUsuariosInput | pagosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: pagosUpdateManyWithWhereWithoutUsuariosInput | pagosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: pagosScalarWhereInput | pagosScalarWhereInput[]
  }

  export type prestamosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<prestamosCreateWithoutUsuariosInput, prestamosUncheckedCreateWithoutUsuariosInput> | prestamosCreateWithoutUsuariosInput[] | prestamosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: prestamosCreateOrConnectWithoutUsuariosInput | prestamosCreateOrConnectWithoutUsuariosInput[]
    upsert?: prestamosUpsertWithWhereUniqueWithoutUsuariosInput | prestamosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: prestamosCreateManyUsuariosInputEnvelope
    set?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    disconnect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    delete?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    connect?: prestamosWhereUniqueInput | prestamosWhereUniqueInput[]
    update?: prestamosUpdateWithWhereUniqueWithoutUsuariosInput | prestamosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: prestamosUpdateManyWithWhereWithoutUsuariosInput | prestamosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: prestamosScalarWhereInput | prestamosScalarWhereInput[]
  }

  export type NullableEnumfrecuencia_pagoFieldUpdateOperationsInput = {
    set?: $Enums.frecuencia_pago | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumestado_cuotaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_cuota | Enumestado_cuotaFieldRefInput<$PrismaModel> | null
    in?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumestado_cuotaNullableFilter<$PrismaModel> | $Enums.estado_cuota | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumestado_cuotaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_cuota | Enumestado_cuotaFieldRefInput<$PrismaModel> | null
    in?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.estado_cuota[] | ListEnumestado_cuotaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumestado_cuotaNullableWithAggregatesFilter<$PrismaModel> | $Enums.estado_cuota | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumestado_cuotaNullableFilter<$PrismaModel>
    _max?: NestedEnumestado_cuotaNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumtipo_movimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_movimiento | Enumtipo_movimientoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_movimientoFilter<$PrismaModel> | $Enums.tipo_movimiento
  }

  export type NestedEnumtipo_movimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_movimiento | Enumtipo_movimientoFieldRefInput<$PrismaModel>
    in?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.tipo_movimiento[] | ListEnumtipo_movimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumtipo_movimientoWithAggregatesFilter<$PrismaModel> | $Enums.tipo_movimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtipo_movimientoFilter<$PrismaModel>
    _max?: NestedEnumtipo_movimientoFilter<$PrismaModel>
  }

  export type NestedEnumforma_pagoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.forma_pago | Enumforma_pagoFieldRefInput<$PrismaModel> | null
    in?: $Enums.forma_pago[] | ListEnumforma_pagoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.forma_pago[] | ListEnumforma_pagoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumforma_pagoNullableFilter<$PrismaModel> | $Enums.forma_pago | null
  }

  export type NestedEnumforma_pagoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.forma_pago | Enumforma_pagoFieldRefInput<$PrismaModel> | null
    in?: $Enums.forma_pago[] | ListEnumforma_pagoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.forma_pago[] | ListEnumforma_pagoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumforma_pagoNullableWithAggregatesFilter<$PrismaModel> | $Enums.forma_pago | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumforma_pagoNullableFilter<$PrismaModel>
    _max?: NestedEnumforma_pagoNullableFilter<$PrismaModel>
  }

  export type NestedEnumtipo_interesNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_interes | Enumtipo_interesFieldRefInput<$PrismaModel> | null
    in?: $Enums.tipo_interes[] | ListEnumtipo_interesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.tipo_interes[] | ListEnumtipo_interesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtipo_interesNullableFilter<$PrismaModel> | $Enums.tipo_interes | null
  }

  export type NestedEnumfrecuencia_pagoFilter<$PrismaModel = never> = {
    equals?: $Enums.frecuencia_pago | Enumfrecuencia_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel>
    not?: NestedEnumfrecuencia_pagoFilter<$PrismaModel> | $Enums.frecuencia_pago
  }

  export type NestedEnumestado_prestamoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_prestamo | Enumestado_prestamoFieldRefInput<$PrismaModel> | null
    in?: $Enums.estado_prestamo[] | ListEnumestado_prestamoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.estado_prestamo[] | ListEnumestado_prestamoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumestado_prestamoNullableFilter<$PrismaModel> | $Enums.estado_prestamo | null
  }

  export type NestedEnumtipo_interesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tipo_interes | Enumtipo_interesFieldRefInput<$PrismaModel> | null
    in?: $Enums.tipo_interes[] | ListEnumtipo_interesFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.tipo_interes[] | ListEnumtipo_interesFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtipo_interesNullableWithAggregatesFilter<$PrismaModel> | $Enums.tipo_interes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtipo_interesNullableFilter<$PrismaModel>
    _max?: NestedEnumtipo_interesNullableFilter<$PrismaModel>
  }

  export type NestedEnumfrecuencia_pagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.frecuencia_pago | Enumfrecuencia_pagoFieldRefInput<$PrismaModel>
    in?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel>
    notIn?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel>
    not?: NestedEnumfrecuencia_pagoWithAggregatesFilter<$PrismaModel> | $Enums.frecuencia_pago
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumfrecuencia_pagoFilter<$PrismaModel>
    _max?: NestedEnumfrecuencia_pagoFilter<$PrismaModel>
  }

  export type NestedEnumestado_prestamoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_prestamo | Enumestado_prestamoFieldRefInput<$PrismaModel> | null
    in?: $Enums.estado_prestamo[] | ListEnumestado_prestamoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.estado_prestamo[] | ListEnumestado_prestamoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumestado_prestamoNullableWithAggregatesFilter<$PrismaModel> | $Enums.estado_prestamo | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumestado_prestamoNullableFilter<$PrismaModel>
    _max?: NestedEnumestado_prestamoNullableFilter<$PrismaModel>
  }

  export type NestedEnumrolFilter<$PrismaModel = never> = {
    equals?: $Enums.rol | EnumrolFieldRefInput<$PrismaModel>
    in?: $Enums.rol[] | ListEnumrolFieldRefInput<$PrismaModel>
    notIn?: $Enums.rol[] | ListEnumrolFieldRefInput<$PrismaModel>
    not?: NestedEnumrolFilter<$PrismaModel> | $Enums.rol
  }

  export type NestedEnumestado_usuarioNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_usuario | Enumestado_usuarioFieldRefInput<$PrismaModel> | null
    in?: $Enums.estado_usuario[] | ListEnumestado_usuarioFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.estado_usuario[] | ListEnumestado_usuarioFieldRefInput<$PrismaModel> | null
    not?: NestedEnumestado_usuarioNullableFilter<$PrismaModel> | $Enums.estado_usuario | null
  }

  export type NestedEnumrolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rol | EnumrolFieldRefInput<$PrismaModel>
    in?: $Enums.rol[] | ListEnumrolFieldRefInput<$PrismaModel>
    notIn?: $Enums.rol[] | ListEnumrolFieldRefInput<$PrismaModel>
    not?: NestedEnumrolWithAggregatesFilter<$PrismaModel> | $Enums.rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrolFilter<$PrismaModel>
    _max?: NestedEnumrolFilter<$PrismaModel>
  }

  export type NestedEnumestado_usuarioNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.estado_usuario | Enumestado_usuarioFieldRefInput<$PrismaModel> | null
    in?: $Enums.estado_usuario[] | ListEnumestado_usuarioFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.estado_usuario[] | ListEnumestado_usuarioFieldRefInput<$PrismaModel> | null
    not?: NestedEnumestado_usuarioNullableWithAggregatesFilter<$PrismaModel> | $Enums.estado_usuario | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumestado_usuarioNullableFilter<$PrismaModel>
    _max?: NestedEnumestado_usuarioNullableFilter<$PrismaModel>
  }

  export type NestedEnumfrecuencia_pagoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.frecuencia_pago | Enumfrecuencia_pagoFieldRefInput<$PrismaModel> | null
    in?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfrecuencia_pagoNullableFilter<$PrismaModel> | $Enums.frecuencia_pago | null
  }

  export type NestedEnumfrecuencia_pagoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.frecuencia_pago | Enumfrecuencia_pagoFieldRefInput<$PrismaModel> | null
    in?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.frecuencia_pago[] | ListEnumfrecuencia_pagoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumfrecuencia_pagoNullableWithAggregatesFilter<$PrismaModel> | $Enums.frecuencia_pago | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumfrecuencia_pagoNullableFilter<$PrismaModel>
    _max?: NestedEnumfrecuencia_pagoNullableFilter<$PrismaModel>
  }

  export type prestamosCreateWithoutClientesInput = {
    monto: Decimal | DecimalJsLike | number | string
    interes: Decimal | DecimalJsLike | number | string
    total_pagado?: Decimal | DecimalJsLike | number | string | null
    tipo_interes?: $Enums.tipo_interes | null
    cant_cuotas: number
    frecuencia_pago: $Enums.frecuencia_pago
    fecha_inicio: Date | string
    fecha_vencimiento: Date | string
    estado?: $Enums.estado_prestamo | null
    notas?: string | null
    cuotas?: cuotasCreateNestedManyWithoutPrestamosInput
    usuarios: usuariosCreateNestedOneWithoutPrestamosInput
  }

  export type prestamosUncheckedCreateWithoutClientesInput = {
    id_prestamo?: number
    monto: Decimal | DecimalJsLike | number | string
    interes: Decimal | DecimalJsLike | number | string
    total_pagado?: Decimal | DecimalJsLike | number | string | null
    tipo_interes?: $Enums.tipo_interes | null
    id_usuario: number
    cant_cuotas: number
    frecuencia_pago: $Enums.frecuencia_pago
    fecha_inicio: Date | string
    fecha_vencimiento: Date | string
    estado?: $Enums.estado_prestamo | null
    notas?: string | null
    cuotas?: cuotasUncheckedCreateNestedManyWithoutPrestamosInput
  }

  export type prestamosCreateOrConnectWithoutClientesInput = {
    where: prestamosWhereUniqueInput
    create: XOR<prestamosCreateWithoutClientesInput, prestamosUncheckedCreateWithoutClientesInput>
  }

  export type prestamosCreateManyClientesInputEnvelope = {
    data: prestamosCreateManyClientesInput | prestamosCreateManyClientesInput[]
    skipDuplicates?: boolean
  }

  export type prestamosUpsertWithWhereUniqueWithoutClientesInput = {
    where: prestamosWhereUniqueInput
    update: XOR<prestamosUpdateWithoutClientesInput, prestamosUncheckedUpdateWithoutClientesInput>
    create: XOR<prestamosCreateWithoutClientesInput, prestamosUncheckedCreateWithoutClientesInput>
  }

  export type prestamosUpdateWithWhereUniqueWithoutClientesInput = {
    where: prestamosWhereUniqueInput
    data: XOR<prestamosUpdateWithoutClientesInput, prestamosUncheckedUpdateWithoutClientesInput>
  }

  export type prestamosUpdateManyWithWhereWithoutClientesInput = {
    where: prestamosScalarWhereInput
    data: XOR<prestamosUpdateManyMutationInput, prestamosUncheckedUpdateManyWithoutClientesInput>
  }

  export type prestamosScalarWhereInput = {
    AND?: prestamosScalarWhereInput | prestamosScalarWhereInput[]
    OR?: prestamosScalarWhereInput[]
    NOT?: prestamosScalarWhereInput | prestamosScalarWhereInput[]
    id_prestamo?: IntFilter<"prestamos"> | number
    id_cliente?: IntFilter<"prestamos"> | number
    monto?: DecimalFilter<"prestamos"> | Decimal | DecimalJsLike | number | string
    interes?: DecimalFilter<"prestamos"> | Decimal | DecimalJsLike | number | string
    total_pagado?: DecimalNullableFilter<"prestamos"> | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: Enumtipo_interesNullableFilter<"prestamos"> | $Enums.tipo_interes | null
    id_usuario?: IntFilter<"prestamos"> | number
    cant_cuotas?: IntFilter<"prestamos"> | number
    frecuencia_pago?: Enumfrecuencia_pagoFilter<"prestamos"> | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFilter<"prestamos"> | Date | string
    fecha_vencimiento?: DateTimeFilter<"prestamos"> | Date | string
    estado?: Enumestado_prestamoNullableFilter<"prestamos"> | $Enums.estado_prestamo | null
    notas?: StringNullableFilter<"prestamos"> | string | null
  }

  export type prestamosCreateWithoutCuotasInput = {
    monto: Decimal | DecimalJsLike | number | string
    interes: Decimal | DecimalJsLike | number | string
    total_pagado?: Decimal | DecimalJsLike | number | string | null
    tipo_interes?: $Enums.tipo_interes | null
    cant_cuotas: number
    frecuencia_pago: $Enums.frecuencia_pago
    fecha_inicio: Date | string
    fecha_vencimiento: Date | string
    estado?: $Enums.estado_prestamo | null
    notas?: string | null
    clientes: clientesCreateNestedOneWithoutPrestamosInput
    usuarios: usuariosCreateNestedOneWithoutPrestamosInput
  }

  export type prestamosUncheckedCreateWithoutCuotasInput = {
    id_prestamo?: number
    id_cliente: number
    monto: Decimal | DecimalJsLike | number | string
    interes: Decimal | DecimalJsLike | number | string
    total_pagado?: Decimal | DecimalJsLike | number | string | null
    tipo_interes?: $Enums.tipo_interes | null
    id_usuario: number
    cant_cuotas: number
    frecuencia_pago: $Enums.frecuencia_pago
    fecha_inicio: Date | string
    fecha_vencimiento: Date | string
    estado?: $Enums.estado_prestamo | null
    notas?: string | null
  }

  export type prestamosCreateOrConnectWithoutCuotasInput = {
    where: prestamosWhereUniqueInput
    create: XOR<prestamosCreateWithoutCuotasInput, prestamosUncheckedCreateWithoutCuotasInput>
  }

  export type pagosCreateWithoutCuotasInput = {
    fecha_pago: Date | string
    monto_pagado: Decimal | DecimalJsLike | number | string
    forma_pago?: $Enums.forma_pago | null
    recibo_numero?: number | null
    observaciones?: string | null
    usuarios?: usuariosCreateNestedOneWithoutPagosInput
  }

  export type pagosUncheckedCreateWithoutCuotasInput = {
    id_pago?: number
    fecha_pago: Date | string
    monto_pagado: Decimal | DecimalJsLike | number | string
    forma_pago?: $Enums.forma_pago | null
    recibo_numero?: number | null
    cobrador_id?: number | null
    observaciones?: string | null
  }

  export type pagosCreateOrConnectWithoutCuotasInput = {
    where: pagosWhereUniqueInput
    create: XOR<pagosCreateWithoutCuotasInput, pagosUncheckedCreateWithoutCuotasInput>
  }

  export type pagosCreateManyCuotasInputEnvelope = {
    data: pagosCreateManyCuotasInput | pagosCreateManyCuotasInput[]
    skipDuplicates?: boolean
  }

  export type prestamosUpsertWithoutCuotasInput = {
    update: XOR<prestamosUpdateWithoutCuotasInput, prestamosUncheckedUpdateWithoutCuotasInput>
    create: XOR<prestamosCreateWithoutCuotasInput, prestamosUncheckedCreateWithoutCuotasInput>
    where?: prestamosWhereInput
  }

  export type prestamosUpdateToOneWithWhereWithoutCuotasInput = {
    where?: prestamosWhereInput
    data: XOR<prestamosUpdateWithoutCuotasInput, prestamosUncheckedUpdateWithoutCuotasInput>
  }

  export type prestamosUpdateWithoutCuotasInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: NullableEnumtipo_interesFieldUpdateOperationsInput | $Enums.tipo_interes | null
    cant_cuotas?: IntFieldUpdateOperationsInput | number
    frecuencia_pago?: Enumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    clientes?: clientesUpdateOneRequiredWithoutPrestamosNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutPrestamosNestedInput
  }

  export type prestamosUncheckedUpdateWithoutCuotasInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: NullableEnumtipo_interesFieldUpdateOperationsInput | $Enums.tipo_interes | null
    id_usuario?: IntFieldUpdateOperationsInput | number
    cant_cuotas?: IntFieldUpdateOperationsInput | number
    frecuencia_pago?: Enumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pagosUpsertWithWhereUniqueWithoutCuotasInput = {
    where: pagosWhereUniqueInput
    update: XOR<pagosUpdateWithoutCuotasInput, pagosUncheckedUpdateWithoutCuotasInput>
    create: XOR<pagosCreateWithoutCuotasInput, pagosUncheckedCreateWithoutCuotasInput>
  }

  export type pagosUpdateWithWhereUniqueWithoutCuotasInput = {
    where: pagosWhereUniqueInput
    data: XOR<pagosUpdateWithoutCuotasInput, pagosUncheckedUpdateWithoutCuotasInput>
  }

  export type pagosUpdateManyWithWhereWithoutCuotasInput = {
    where: pagosScalarWhereInput
    data: XOR<pagosUpdateManyMutationInput, pagosUncheckedUpdateManyWithoutCuotasInput>
  }

  export type pagosScalarWhereInput = {
    AND?: pagosScalarWhereInput | pagosScalarWhereInput[]
    OR?: pagosScalarWhereInput[]
    NOT?: pagosScalarWhereInput | pagosScalarWhereInput[]
    id_pago?: IntFilter<"pagos"> | number
    id_cuota?: IntFilter<"pagos"> | number
    fecha_pago?: DateTimeFilter<"pagos"> | Date | string
    monto_pagado?: DecimalFilter<"pagos"> | Decimal | DecimalJsLike | number | string
    forma_pago?: Enumforma_pagoNullableFilter<"pagos"> | $Enums.forma_pago | null
    recibo_numero?: IntNullableFilter<"pagos"> | number | null
    cobrador_id?: IntNullableFilter<"pagos"> | number | null
    observaciones?: StringNullableFilter<"pagos"> | string | null
  }

  export type usuariosCreateWithoutLogactividadInput = {
    nombre_usuario: string
    clave_hash: string
    rol: $Enums.rol
    fecha_creacion?: Date | string | null
    ultimo_acceso?: Date | string | null
    fecha_baja?: Date | string | null
    razon_baja?: string | null
    estado?: $Enums.estado_usuario | null
    movimientoscaja?: movimientoscajaCreateNestedManyWithoutUsuariosInput
    pagos?: pagosCreateNestedManyWithoutUsuariosInput
    prestamos?: prestamosCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutLogactividadInput = {
    id_usuario?: number
    nombre_usuario: string
    clave_hash: string
    rol: $Enums.rol
    fecha_creacion?: Date | string | null
    ultimo_acceso?: Date | string | null
    fecha_baja?: Date | string | null
    razon_baja?: string | null
    estado?: $Enums.estado_usuario | null
    movimientoscaja?: movimientoscajaUncheckedCreateNestedManyWithoutUsuariosInput
    pagos?: pagosUncheckedCreateNestedManyWithoutUsuariosInput
    prestamos?: prestamosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutLogactividadInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutLogactividadInput, usuariosUncheckedCreateWithoutLogactividadInput>
  }

  export type usuariosUpsertWithoutLogactividadInput = {
    update: XOR<usuariosUpdateWithoutLogactividadInput, usuariosUncheckedUpdateWithoutLogactividadInput>
    create: XOR<usuariosCreateWithoutLogactividadInput, usuariosUncheckedCreateWithoutLogactividadInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutLogactividadInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutLogactividadInput, usuariosUncheckedUpdateWithoutLogactividadInput>
  }

  export type usuariosUpdateWithoutLogactividadInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave_hash?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon_baja?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableEnumestado_usuarioFieldUpdateOperationsInput | $Enums.estado_usuario | null
    movimientoscaja?: movimientoscajaUpdateManyWithoutUsuariosNestedInput
    pagos?: pagosUpdateManyWithoutUsuariosNestedInput
    prestamos?: prestamosUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutLogactividadInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave_hash?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon_baja?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableEnumestado_usuarioFieldUpdateOperationsInput | $Enums.estado_usuario | null
    movimientoscaja?: movimientoscajaUncheckedUpdateManyWithoutUsuariosNestedInput
    pagos?: pagosUncheckedUpdateManyWithoutUsuariosNestedInput
    prestamos?: prestamosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateWithoutMovimientoscajaInput = {
    nombre_usuario: string
    clave_hash: string
    rol: $Enums.rol
    fecha_creacion?: Date | string | null
    ultimo_acceso?: Date | string | null
    fecha_baja?: Date | string | null
    razon_baja?: string | null
    estado?: $Enums.estado_usuario | null
    logactividad?: logactividadCreateNestedManyWithoutUsuariosInput
    pagos?: pagosCreateNestedManyWithoutUsuariosInput
    prestamos?: prestamosCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutMovimientoscajaInput = {
    id_usuario?: number
    nombre_usuario: string
    clave_hash: string
    rol: $Enums.rol
    fecha_creacion?: Date | string | null
    ultimo_acceso?: Date | string | null
    fecha_baja?: Date | string | null
    razon_baja?: string | null
    estado?: $Enums.estado_usuario | null
    logactividad?: logactividadUncheckedCreateNestedManyWithoutUsuariosInput
    pagos?: pagosUncheckedCreateNestedManyWithoutUsuariosInput
    prestamos?: prestamosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutMovimientoscajaInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutMovimientoscajaInput, usuariosUncheckedCreateWithoutMovimientoscajaInput>
  }

  export type usuariosUpsertWithoutMovimientoscajaInput = {
    update: XOR<usuariosUpdateWithoutMovimientoscajaInput, usuariosUncheckedUpdateWithoutMovimientoscajaInput>
    create: XOR<usuariosCreateWithoutMovimientoscajaInput, usuariosUncheckedCreateWithoutMovimientoscajaInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutMovimientoscajaInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutMovimientoscajaInput, usuariosUncheckedUpdateWithoutMovimientoscajaInput>
  }

  export type usuariosUpdateWithoutMovimientoscajaInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave_hash?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon_baja?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableEnumestado_usuarioFieldUpdateOperationsInput | $Enums.estado_usuario | null
    logactividad?: logactividadUpdateManyWithoutUsuariosNestedInput
    pagos?: pagosUpdateManyWithoutUsuariosNestedInput
    prestamos?: prestamosUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutMovimientoscajaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave_hash?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon_baja?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableEnumestado_usuarioFieldUpdateOperationsInput | $Enums.estado_usuario | null
    logactividad?: logactividadUncheckedUpdateManyWithoutUsuariosNestedInput
    pagos?: pagosUncheckedUpdateManyWithoutUsuariosNestedInput
    prestamos?: prestamosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateWithoutPagosInput = {
    nombre_usuario: string
    clave_hash: string
    rol: $Enums.rol
    fecha_creacion?: Date | string | null
    ultimo_acceso?: Date | string | null
    fecha_baja?: Date | string | null
    razon_baja?: string | null
    estado?: $Enums.estado_usuario | null
    logactividad?: logactividadCreateNestedManyWithoutUsuariosInput
    movimientoscaja?: movimientoscajaCreateNestedManyWithoutUsuariosInput
    prestamos?: prestamosCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutPagosInput = {
    id_usuario?: number
    nombre_usuario: string
    clave_hash: string
    rol: $Enums.rol
    fecha_creacion?: Date | string | null
    ultimo_acceso?: Date | string | null
    fecha_baja?: Date | string | null
    razon_baja?: string | null
    estado?: $Enums.estado_usuario | null
    logactividad?: logactividadUncheckedCreateNestedManyWithoutUsuariosInput
    movimientoscaja?: movimientoscajaUncheckedCreateNestedManyWithoutUsuariosInput
    prestamos?: prestamosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutPagosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutPagosInput, usuariosUncheckedCreateWithoutPagosInput>
  }

  export type cuotasCreateWithoutPagosInput = {
    numero: number
    fecha_prevista: Date | string
    monto: Decimal | DecimalJsLike | number | string
    monto_restante: Decimal | DecimalJsLike | number | string
    intereses_mora?: Decimal | DecimalJsLike | number | string | null
    estado_pago?: $Enums.estado_cuota | null
    prestamos: prestamosCreateNestedOneWithoutCuotasInput
  }

  export type cuotasUncheckedCreateWithoutPagosInput = {
    id_cuota?: number
    id_prestamo: number
    numero: number
    fecha_prevista: Date | string
    monto: Decimal | DecimalJsLike | number | string
    monto_restante: Decimal | DecimalJsLike | number | string
    intereses_mora?: Decimal | DecimalJsLike | number | string | null
    estado_pago?: $Enums.estado_cuota | null
  }

  export type cuotasCreateOrConnectWithoutPagosInput = {
    where: cuotasWhereUniqueInput
    create: XOR<cuotasCreateWithoutPagosInput, cuotasUncheckedCreateWithoutPagosInput>
  }

  export type usuariosUpsertWithoutPagosInput = {
    update: XOR<usuariosUpdateWithoutPagosInput, usuariosUncheckedUpdateWithoutPagosInput>
    create: XOR<usuariosCreateWithoutPagosInput, usuariosUncheckedCreateWithoutPagosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutPagosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutPagosInput, usuariosUncheckedUpdateWithoutPagosInput>
  }

  export type usuariosUpdateWithoutPagosInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave_hash?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon_baja?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableEnumestado_usuarioFieldUpdateOperationsInput | $Enums.estado_usuario | null
    logactividad?: logactividadUpdateManyWithoutUsuariosNestedInput
    movimientoscaja?: movimientoscajaUpdateManyWithoutUsuariosNestedInput
    prestamos?: prestamosUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutPagosInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave_hash?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon_baja?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableEnumestado_usuarioFieldUpdateOperationsInput | $Enums.estado_usuario | null
    logactividad?: logactividadUncheckedUpdateManyWithoutUsuariosNestedInput
    movimientoscaja?: movimientoscajaUncheckedUpdateManyWithoutUsuariosNestedInput
    prestamos?: prestamosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type cuotasUpsertWithoutPagosInput = {
    update: XOR<cuotasUpdateWithoutPagosInput, cuotasUncheckedUpdateWithoutPagosInput>
    create: XOR<cuotasCreateWithoutPagosInput, cuotasUncheckedCreateWithoutPagosInput>
    where?: cuotasWhereInput
  }

  export type cuotasUpdateToOneWithWhereWithoutPagosInput = {
    where?: cuotasWhereInput
    data: XOR<cuotasUpdateWithoutPagosInput, cuotasUncheckedUpdateWithoutPagosInput>
  }

  export type cuotasUpdateWithoutPagosInput = {
    numero?: IntFieldUpdateOperationsInput | number
    fecha_prevista?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_restante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    intereses_mora?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado_pago?: NullableEnumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota | null
    prestamos?: prestamosUpdateOneRequiredWithoutCuotasNestedInput
  }

  export type cuotasUncheckedUpdateWithoutPagosInput = {
    id_cuota?: IntFieldUpdateOperationsInput | number
    id_prestamo?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    fecha_prevista?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_restante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    intereses_mora?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado_pago?: NullableEnumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota | null
  }

  export type cuotasCreateWithoutPrestamosInput = {
    numero: number
    fecha_prevista: Date | string
    monto: Decimal | DecimalJsLike | number | string
    monto_restante: Decimal | DecimalJsLike | number | string
    intereses_mora?: Decimal | DecimalJsLike | number | string | null
    estado_pago?: $Enums.estado_cuota | null
    pagos?: pagosCreateNestedManyWithoutCuotasInput
  }

  export type cuotasUncheckedCreateWithoutPrestamosInput = {
    id_cuota?: number
    numero: number
    fecha_prevista: Date | string
    monto: Decimal | DecimalJsLike | number | string
    monto_restante: Decimal | DecimalJsLike | number | string
    intereses_mora?: Decimal | DecimalJsLike | number | string | null
    estado_pago?: $Enums.estado_cuota | null
    pagos?: pagosUncheckedCreateNestedManyWithoutCuotasInput
  }

  export type cuotasCreateOrConnectWithoutPrestamosInput = {
    where: cuotasWhereUniqueInput
    create: XOR<cuotasCreateWithoutPrestamosInput, cuotasUncheckedCreateWithoutPrestamosInput>
  }

  export type cuotasCreateManyPrestamosInputEnvelope = {
    data: cuotasCreateManyPrestamosInput | cuotasCreateManyPrestamosInput[]
    skipDuplicates?: boolean
  }

  export type clientesCreateWithoutPrestamosInput = {
    nombre: string
    cedula: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    foto_url?: string | null
    notas?: string | null
    referido_por?: string | null
    fecha_registro?: Date | string | null
  }

  export type clientesUncheckedCreateWithoutPrestamosInput = {
    id_cliente?: number
    nombre: string
    cedula: string
    telefono?: string | null
    email?: string | null
    direccion?: string | null
    foto_url?: string | null
    notas?: string | null
    referido_por?: string | null
    fecha_registro?: Date | string | null
  }

  export type clientesCreateOrConnectWithoutPrestamosInput = {
    where: clientesWhereUniqueInput
    create: XOR<clientesCreateWithoutPrestamosInput, clientesUncheckedCreateWithoutPrestamosInput>
  }

  export type usuariosCreateWithoutPrestamosInput = {
    nombre_usuario: string
    clave_hash: string
    rol: $Enums.rol
    fecha_creacion?: Date | string | null
    ultimo_acceso?: Date | string | null
    fecha_baja?: Date | string | null
    razon_baja?: string | null
    estado?: $Enums.estado_usuario | null
    logactividad?: logactividadCreateNestedManyWithoutUsuariosInput
    movimientoscaja?: movimientoscajaCreateNestedManyWithoutUsuariosInput
    pagos?: pagosCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutPrestamosInput = {
    id_usuario?: number
    nombre_usuario: string
    clave_hash: string
    rol: $Enums.rol
    fecha_creacion?: Date | string | null
    ultimo_acceso?: Date | string | null
    fecha_baja?: Date | string | null
    razon_baja?: string | null
    estado?: $Enums.estado_usuario | null
    logactividad?: logactividadUncheckedCreateNestedManyWithoutUsuariosInput
    movimientoscaja?: movimientoscajaUncheckedCreateNestedManyWithoutUsuariosInput
    pagos?: pagosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutPrestamosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutPrestamosInput, usuariosUncheckedCreateWithoutPrestamosInput>
  }

  export type cuotasUpsertWithWhereUniqueWithoutPrestamosInput = {
    where: cuotasWhereUniqueInput
    update: XOR<cuotasUpdateWithoutPrestamosInput, cuotasUncheckedUpdateWithoutPrestamosInput>
    create: XOR<cuotasCreateWithoutPrestamosInput, cuotasUncheckedCreateWithoutPrestamosInput>
  }

  export type cuotasUpdateWithWhereUniqueWithoutPrestamosInput = {
    where: cuotasWhereUniqueInput
    data: XOR<cuotasUpdateWithoutPrestamosInput, cuotasUncheckedUpdateWithoutPrestamosInput>
  }

  export type cuotasUpdateManyWithWhereWithoutPrestamosInput = {
    where: cuotasScalarWhereInput
    data: XOR<cuotasUpdateManyMutationInput, cuotasUncheckedUpdateManyWithoutPrestamosInput>
  }

  export type cuotasScalarWhereInput = {
    AND?: cuotasScalarWhereInput | cuotasScalarWhereInput[]
    OR?: cuotasScalarWhereInput[]
    NOT?: cuotasScalarWhereInput | cuotasScalarWhereInput[]
    id_cuota?: IntFilter<"cuotas"> | number
    id_prestamo?: IntFilter<"cuotas"> | number
    numero?: IntFilter<"cuotas"> | number
    fecha_prevista?: DateTimeFilter<"cuotas"> | Date | string
    monto?: DecimalFilter<"cuotas"> | Decimal | DecimalJsLike | number | string
    monto_restante?: DecimalFilter<"cuotas"> | Decimal | DecimalJsLike | number | string
    intereses_mora?: DecimalNullableFilter<"cuotas"> | Decimal | DecimalJsLike | number | string | null
    estado_pago?: Enumestado_cuotaNullableFilter<"cuotas"> | $Enums.estado_cuota | null
  }

  export type clientesUpsertWithoutPrestamosInput = {
    update: XOR<clientesUpdateWithoutPrestamosInput, clientesUncheckedUpdateWithoutPrestamosInput>
    create: XOR<clientesCreateWithoutPrestamosInput, clientesUncheckedCreateWithoutPrestamosInput>
    where?: clientesWhereInput
  }

  export type clientesUpdateToOneWithWhereWithoutPrestamosInput = {
    where?: clientesWhereInput
    data: XOR<clientesUpdateWithoutPrestamosInput, clientesUncheckedUpdateWithoutPrestamosInput>
  }

  export type clientesUpdateWithoutPrestamosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    referido_por?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type clientesUncheckedUpdateWithoutPrestamosInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    referido_por?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUpsertWithoutPrestamosInput = {
    update: XOR<usuariosUpdateWithoutPrestamosInput, usuariosUncheckedUpdateWithoutPrestamosInput>
    create: XOR<usuariosCreateWithoutPrestamosInput, usuariosUncheckedCreateWithoutPrestamosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutPrestamosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutPrestamosInput, usuariosUncheckedUpdateWithoutPrestamosInput>
  }

  export type usuariosUpdateWithoutPrestamosInput = {
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave_hash?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon_baja?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableEnumestado_usuarioFieldUpdateOperationsInput | $Enums.estado_usuario | null
    logactividad?: logactividadUpdateManyWithoutUsuariosNestedInput
    movimientoscaja?: movimientoscajaUpdateManyWithoutUsuariosNestedInput
    pagos?: pagosUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutPrestamosInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    clave_hash?: StringFieldUpdateOperationsInput | string
    rol?: EnumrolFieldUpdateOperationsInput | $Enums.rol
    fecha_creacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ultimo_acceso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razon_baja?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableEnumestado_usuarioFieldUpdateOperationsInput | $Enums.estado_usuario | null
    logactividad?: logactividadUncheckedUpdateManyWithoutUsuariosNestedInput
    movimientoscaja?: movimientoscajaUncheckedUpdateManyWithoutUsuariosNestedInput
    pagos?: pagosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type logactividadCreateWithoutUsuariosInput = {
    accion: string
    fecha_hora?: Date | string | null
  }

  export type logactividadUncheckedCreateWithoutUsuariosInput = {
    id_log?: number
    accion: string
    fecha_hora?: Date | string | null
  }

  export type logactividadCreateOrConnectWithoutUsuariosInput = {
    where: logactividadWhereUniqueInput
    create: XOR<logactividadCreateWithoutUsuariosInput, logactividadUncheckedCreateWithoutUsuariosInput>
  }

  export type logactividadCreateManyUsuariosInputEnvelope = {
    data: logactividadCreateManyUsuariosInput | logactividadCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type movimientoscajaCreateWithoutUsuariosInput = {
    tipo: $Enums.tipo_movimiento
    prestamo_id?: number | null
    pago_id?: number | null
    descripcion?: string | null
    monto: Decimal | DecimalJsLike | number | string
    fecha?: Date | string | null
  }

  export type movimientoscajaUncheckedCreateWithoutUsuariosInput = {
    id_movimiento?: number
    tipo: $Enums.tipo_movimiento
    prestamo_id?: number | null
    pago_id?: number | null
    descripcion?: string | null
    monto: Decimal | DecimalJsLike | number | string
    fecha?: Date | string | null
  }

  export type movimientoscajaCreateOrConnectWithoutUsuariosInput = {
    where: movimientoscajaWhereUniqueInput
    create: XOR<movimientoscajaCreateWithoutUsuariosInput, movimientoscajaUncheckedCreateWithoutUsuariosInput>
  }

  export type movimientoscajaCreateManyUsuariosInputEnvelope = {
    data: movimientoscajaCreateManyUsuariosInput | movimientoscajaCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type pagosCreateWithoutUsuariosInput = {
    fecha_pago: Date | string
    monto_pagado: Decimal | DecimalJsLike | number | string
    forma_pago?: $Enums.forma_pago | null
    recibo_numero?: number | null
    observaciones?: string | null
    cuotas: cuotasCreateNestedOneWithoutPagosInput
  }

  export type pagosUncheckedCreateWithoutUsuariosInput = {
    id_pago?: number
    id_cuota: number
    fecha_pago: Date | string
    monto_pagado: Decimal | DecimalJsLike | number | string
    forma_pago?: $Enums.forma_pago | null
    recibo_numero?: number | null
    observaciones?: string | null
  }

  export type pagosCreateOrConnectWithoutUsuariosInput = {
    where: pagosWhereUniqueInput
    create: XOR<pagosCreateWithoutUsuariosInput, pagosUncheckedCreateWithoutUsuariosInput>
  }

  export type pagosCreateManyUsuariosInputEnvelope = {
    data: pagosCreateManyUsuariosInput | pagosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type prestamosCreateWithoutUsuariosInput = {
    monto: Decimal | DecimalJsLike | number | string
    interes: Decimal | DecimalJsLike | number | string
    total_pagado?: Decimal | DecimalJsLike | number | string | null
    tipo_interes?: $Enums.tipo_interes | null
    cant_cuotas: number
    frecuencia_pago: $Enums.frecuencia_pago
    fecha_inicio: Date | string
    fecha_vencimiento: Date | string
    estado?: $Enums.estado_prestamo | null
    notas?: string | null
    cuotas?: cuotasCreateNestedManyWithoutPrestamosInput
    clientes: clientesCreateNestedOneWithoutPrestamosInput
  }

  export type prestamosUncheckedCreateWithoutUsuariosInput = {
    id_prestamo?: number
    id_cliente: number
    monto: Decimal | DecimalJsLike | number | string
    interes: Decimal | DecimalJsLike | number | string
    total_pagado?: Decimal | DecimalJsLike | number | string | null
    tipo_interes?: $Enums.tipo_interes | null
    cant_cuotas: number
    frecuencia_pago: $Enums.frecuencia_pago
    fecha_inicio: Date | string
    fecha_vencimiento: Date | string
    estado?: $Enums.estado_prestamo | null
    notas?: string | null
    cuotas?: cuotasUncheckedCreateNestedManyWithoutPrestamosInput
  }

  export type prestamosCreateOrConnectWithoutUsuariosInput = {
    where: prestamosWhereUniqueInput
    create: XOR<prestamosCreateWithoutUsuariosInput, prestamosUncheckedCreateWithoutUsuariosInput>
  }

  export type prestamosCreateManyUsuariosInputEnvelope = {
    data: prestamosCreateManyUsuariosInput | prestamosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type logactividadUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: logactividadWhereUniqueInput
    update: XOR<logactividadUpdateWithoutUsuariosInput, logactividadUncheckedUpdateWithoutUsuariosInput>
    create: XOR<logactividadCreateWithoutUsuariosInput, logactividadUncheckedCreateWithoutUsuariosInput>
  }

  export type logactividadUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: logactividadWhereUniqueInput
    data: XOR<logactividadUpdateWithoutUsuariosInput, logactividadUncheckedUpdateWithoutUsuariosInput>
  }

  export type logactividadUpdateManyWithWhereWithoutUsuariosInput = {
    where: logactividadScalarWhereInput
    data: XOR<logactividadUpdateManyMutationInput, logactividadUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type logactividadScalarWhereInput = {
    AND?: logactividadScalarWhereInput | logactividadScalarWhereInput[]
    OR?: logactividadScalarWhereInput[]
    NOT?: logactividadScalarWhereInput | logactividadScalarWhereInput[]
    id_log?: IntFilter<"logactividad"> | number
    id_usuario?: IntNullableFilter<"logactividad"> | number | null
    accion?: StringFilter<"logactividad"> | string
    fecha_hora?: DateTimeNullableFilter<"logactividad"> | Date | string | null
  }

  export type movimientoscajaUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: movimientoscajaWhereUniqueInput
    update: XOR<movimientoscajaUpdateWithoutUsuariosInput, movimientoscajaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<movimientoscajaCreateWithoutUsuariosInput, movimientoscajaUncheckedCreateWithoutUsuariosInput>
  }

  export type movimientoscajaUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: movimientoscajaWhereUniqueInput
    data: XOR<movimientoscajaUpdateWithoutUsuariosInput, movimientoscajaUncheckedUpdateWithoutUsuariosInput>
  }

  export type movimientoscajaUpdateManyWithWhereWithoutUsuariosInput = {
    where: movimientoscajaScalarWhereInput
    data: XOR<movimientoscajaUpdateManyMutationInput, movimientoscajaUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type movimientoscajaScalarWhereInput = {
    AND?: movimientoscajaScalarWhereInput | movimientoscajaScalarWhereInput[]
    OR?: movimientoscajaScalarWhereInput[]
    NOT?: movimientoscajaScalarWhereInput | movimientoscajaScalarWhereInput[]
    id_movimiento?: IntFilter<"movimientoscaja"> | number
    tipo?: Enumtipo_movimientoFilter<"movimientoscaja"> | $Enums.tipo_movimiento
    prestamo_id?: IntNullableFilter<"movimientoscaja"> | number | null
    pago_id?: IntNullableFilter<"movimientoscaja"> | number | null
    descripcion?: StringNullableFilter<"movimientoscaja"> | string | null
    monto?: DecimalFilter<"movimientoscaja"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeNullableFilter<"movimientoscaja"> | Date | string | null
    usuario_id?: IntNullableFilter<"movimientoscaja"> | number | null
  }

  export type pagosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: pagosWhereUniqueInput
    update: XOR<pagosUpdateWithoutUsuariosInput, pagosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<pagosCreateWithoutUsuariosInput, pagosUncheckedCreateWithoutUsuariosInput>
  }

  export type pagosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: pagosWhereUniqueInput
    data: XOR<pagosUpdateWithoutUsuariosInput, pagosUncheckedUpdateWithoutUsuariosInput>
  }

  export type pagosUpdateManyWithWhereWithoutUsuariosInput = {
    where: pagosScalarWhereInput
    data: XOR<pagosUpdateManyMutationInput, pagosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type prestamosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: prestamosWhereUniqueInput
    update: XOR<prestamosUpdateWithoutUsuariosInput, prestamosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<prestamosCreateWithoutUsuariosInput, prestamosUncheckedCreateWithoutUsuariosInput>
  }

  export type prestamosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: prestamosWhereUniqueInput
    data: XOR<prestamosUpdateWithoutUsuariosInput, prestamosUncheckedUpdateWithoutUsuariosInput>
  }

  export type prestamosUpdateManyWithWhereWithoutUsuariosInput = {
    where: prestamosScalarWhereInput
    data: XOR<prestamosUpdateManyMutationInput, prestamosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type prestamosCreateManyClientesInput = {
    id_prestamo?: number
    monto: Decimal | DecimalJsLike | number | string
    interes: Decimal | DecimalJsLike | number | string
    total_pagado?: Decimal | DecimalJsLike | number | string | null
    tipo_interes?: $Enums.tipo_interes | null
    id_usuario: number
    cant_cuotas: number
    frecuencia_pago: $Enums.frecuencia_pago
    fecha_inicio: Date | string
    fecha_vencimiento: Date | string
    estado?: $Enums.estado_prestamo | null
    notas?: string | null
  }

  export type prestamosUpdateWithoutClientesInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: NullableEnumtipo_interesFieldUpdateOperationsInput | $Enums.tipo_interes | null
    cant_cuotas?: IntFieldUpdateOperationsInput | number
    frecuencia_pago?: Enumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    cuotas?: cuotasUpdateManyWithoutPrestamosNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutPrestamosNestedInput
  }

  export type prestamosUncheckedUpdateWithoutClientesInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: NullableEnumtipo_interesFieldUpdateOperationsInput | $Enums.tipo_interes | null
    id_usuario?: IntFieldUpdateOperationsInput | number
    cant_cuotas?: IntFieldUpdateOperationsInput | number
    frecuencia_pago?: Enumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    cuotas?: cuotasUncheckedUpdateManyWithoutPrestamosNestedInput
  }

  export type prestamosUncheckedUpdateManyWithoutClientesInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: NullableEnumtipo_interesFieldUpdateOperationsInput | $Enums.tipo_interes | null
    id_usuario?: IntFieldUpdateOperationsInput | number
    cant_cuotas?: IntFieldUpdateOperationsInput | number
    frecuencia_pago?: Enumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pagosCreateManyCuotasInput = {
    id_pago?: number
    fecha_pago: Date | string
    monto_pagado: Decimal | DecimalJsLike | number | string
    forma_pago?: $Enums.forma_pago | null
    recibo_numero?: number | null
    cobrador_id?: number | null
    observaciones?: string | null
  }

  export type pagosUpdateWithoutCuotasInput = {
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forma_pago?: NullableEnumforma_pagoFieldUpdateOperationsInput | $Enums.forma_pago | null
    recibo_numero?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUpdateOneWithoutPagosNestedInput
  }

  export type pagosUncheckedUpdateWithoutCuotasInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forma_pago?: NullableEnumforma_pagoFieldUpdateOperationsInput | $Enums.forma_pago | null
    recibo_numero?: NullableIntFieldUpdateOperationsInput | number | null
    cobrador_id?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pagosUncheckedUpdateManyWithoutCuotasInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forma_pago?: NullableEnumforma_pagoFieldUpdateOperationsInput | $Enums.forma_pago | null
    recibo_numero?: NullableIntFieldUpdateOperationsInput | number | null
    cobrador_id?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cuotasCreateManyPrestamosInput = {
    id_cuota?: number
    numero: number
    fecha_prevista: Date | string
    monto: Decimal | DecimalJsLike | number | string
    monto_restante: Decimal | DecimalJsLike | number | string
    intereses_mora?: Decimal | DecimalJsLike | number | string | null
    estado_pago?: $Enums.estado_cuota | null
  }

  export type cuotasUpdateWithoutPrestamosInput = {
    numero?: IntFieldUpdateOperationsInput | number
    fecha_prevista?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_restante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    intereses_mora?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado_pago?: NullableEnumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota | null
    pagos?: pagosUpdateManyWithoutCuotasNestedInput
  }

  export type cuotasUncheckedUpdateWithoutPrestamosInput = {
    id_cuota?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    fecha_prevista?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_restante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    intereses_mora?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado_pago?: NullableEnumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota | null
    pagos?: pagosUncheckedUpdateManyWithoutCuotasNestedInput
  }

  export type cuotasUncheckedUpdateManyWithoutPrestamosInput = {
    id_cuota?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    fecha_prevista?: DateTimeFieldUpdateOperationsInput | Date | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monto_restante?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    intereses_mora?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estado_pago?: NullableEnumestado_cuotaFieldUpdateOperationsInput | $Enums.estado_cuota | null
  }

  export type logactividadCreateManyUsuariosInput = {
    id_log?: number
    accion: string
    fecha_hora?: Date | string | null
  }

  export type movimientoscajaCreateManyUsuariosInput = {
    id_movimiento?: number
    tipo: $Enums.tipo_movimiento
    prestamo_id?: number | null
    pago_id?: number | null
    descripcion?: string | null
    monto: Decimal | DecimalJsLike | number | string
    fecha?: Date | string | null
  }

  export type pagosCreateManyUsuariosInput = {
    id_pago?: number
    id_cuota: number
    fecha_pago: Date | string
    monto_pagado: Decimal | DecimalJsLike | number | string
    forma_pago?: $Enums.forma_pago | null
    recibo_numero?: number | null
    observaciones?: string | null
  }

  export type prestamosCreateManyUsuariosInput = {
    id_prestamo?: number
    id_cliente: number
    monto: Decimal | DecimalJsLike | number | string
    interes: Decimal | DecimalJsLike | number | string
    total_pagado?: Decimal | DecimalJsLike | number | string | null
    tipo_interes?: $Enums.tipo_interes | null
    cant_cuotas: number
    frecuencia_pago: $Enums.frecuencia_pago
    fecha_inicio: Date | string
    fecha_vencimiento: Date | string
    estado?: $Enums.estado_prestamo | null
    notas?: string | null
  }

  export type logactividadUpdateWithoutUsuariosInput = {
    accion?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logactividadUncheckedUpdateWithoutUsuariosInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type logactividadUncheckedUpdateManyWithoutUsuariosInput = {
    id_log?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    fecha_hora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoscajaUpdateWithoutUsuariosInput = {
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    prestamo_id?: NullableIntFieldUpdateOperationsInput | number | null
    pago_id?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoscajaUncheckedUpdateWithoutUsuariosInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    prestamo_id?: NullableIntFieldUpdateOperationsInput | number | null
    pago_id?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type movimientoscajaUncheckedUpdateManyWithoutUsuariosInput = {
    id_movimiento?: IntFieldUpdateOperationsInput | number
    tipo?: Enumtipo_movimientoFieldUpdateOperationsInput | $Enums.tipo_movimiento
    prestamo_id?: NullableIntFieldUpdateOperationsInput | number | null
    pago_id?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pagosUpdateWithoutUsuariosInput = {
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forma_pago?: NullableEnumforma_pagoFieldUpdateOperationsInput | $Enums.forma_pago | null
    recibo_numero?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    cuotas?: cuotasUpdateOneRequiredWithoutPagosNestedInput
  }

  export type pagosUncheckedUpdateWithoutUsuariosInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    id_cuota?: IntFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forma_pago?: NullableEnumforma_pagoFieldUpdateOperationsInput | $Enums.forma_pago | null
    recibo_numero?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pagosUncheckedUpdateManyWithoutUsuariosInput = {
    id_pago?: IntFieldUpdateOperationsInput | number
    id_cuota?: IntFieldUpdateOperationsInput | number
    fecha_pago?: DateTimeFieldUpdateOperationsInput | Date | string
    monto_pagado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    forma_pago?: NullableEnumforma_pagoFieldUpdateOperationsInput | $Enums.forma_pago | null
    recibo_numero?: NullableIntFieldUpdateOperationsInput | number | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prestamosUpdateWithoutUsuariosInput = {
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: NullableEnumtipo_interesFieldUpdateOperationsInput | $Enums.tipo_interes | null
    cant_cuotas?: IntFieldUpdateOperationsInput | number
    frecuencia_pago?: Enumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    cuotas?: cuotasUpdateManyWithoutPrestamosNestedInput
    clientes?: clientesUpdateOneRequiredWithoutPrestamosNestedInput
  }

  export type prestamosUncheckedUpdateWithoutUsuariosInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: NullableEnumtipo_interesFieldUpdateOperationsInput | $Enums.tipo_interes | null
    cant_cuotas?: IntFieldUpdateOperationsInput | number
    frecuencia_pago?: Enumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    cuotas?: cuotasUncheckedUpdateManyWithoutPrestamosNestedInput
  }

  export type prestamosUncheckedUpdateManyWithoutUsuariosInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    interes?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_pagado?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tipo_interes?: NullableEnumtipo_interesFieldUpdateOperationsInput | $Enums.tipo_interes | null
    cant_cuotas?: IntFieldUpdateOperationsInput | number
    frecuencia_pago?: Enumfrecuencia_pagoFieldUpdateOperationsInput | $Enums.frecuencia_pago
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableEnumestado_prestamoFieldUpdateOperationsInput | $Enums.estado_prestamo | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}