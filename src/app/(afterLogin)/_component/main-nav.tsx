"use client";

import Link from "next/link";
import style from "./main-nav.module.css";
import { useSelectedLayoutSegment } from "next/navigation";

export default function MainNav() {
  const segment = useSelectedLayoutSegment();
  console.log(segment);
  return (
    <>
      <li>
        <Link href={"/browse"}>
          <div className={style.navPill}>
            {segment === "browse" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  viewBox="0 0 24 24"
                  fill={"red"}
                >
                  <path d="M3.018 10.982 3 11h2v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h2l-.018-.018a.986.986 0 0 0 .85-.427 1 1 0 0 0-.278-1.387l-9-6a1 1 0 0 0-1.11 0L8 5.465V4a1 1 0 0 0-2 0v2.8L2.446 9.168a1 1 0 0 0-.278 1.387.983.983 0 0 0 .85.427ZM14 19h-4v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm-4-8h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Z" />
                </svg>
                <div className={"font-bold text-red-600"}>홈</div>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  viewBox="0 0 24 24"
                  fill={"white"}
                >
                  <path d="M8 11a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1Zm13.832-1.445A1 1 0 0 1 21 10h-1v11a1 1 0 0 1-.293.707 60.628 60.628 0 0 1-.318.214A.99.99 0 0 1 19 22H5a1 1 0 0 1-1-1V10H3a1.054 1.054 0 0 1-.829-.441 1 1 0 0 1 .278-1.387L6 5.8V3a1 1 0 0 1 2 0v1.465l3.445-2.3A1 1 0 0 1 12 2a1 1 0 0 1 .555.168l8.249 5.5.75.5a1 1 0 0 1 .278 1.387ZM14 16h-4v4h4Zm4-7.8-6-4-6 4V20h2v-5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5h2Z" />
                </svg>
                <div>홈</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href={"/series/10759"}>
          <div className={style.navPill}>
            {segment === "series" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  viewBox="0 0 32 32"
                  fill={"red"}
                >
                  <path
                    fillRule="evenodd"
                    d="M25 18a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm2 7h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2Zm0 3h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2Zm-7-2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12Zm8-18h-9.254l8.772-6.035c.463-.319.595-.977.295-1.469-.299-.492-.918-.633-1.382-.314 0 0-9.61 6.635-10.422 7.125L5.569.182C5.106-.137 4.486.004 4.187.496c-.3.492-.168 1.15.295 1.469L13.254 8H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4Zm-4 8h2v-2h-2v2Zm-7-2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V15a1 1 0 0 0-1-1Z"
                  />
                </svg>
                <div className={"font-bold text-red-600"}>시리즈</div>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  fill={"white"}
                >
                  <path
                    fillRule="evenodd"
                    d="M30 28a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16ZM28 8h-9.254l8.772-6.035c.463-.319.595-.977.295-1.469-.299-.492-.918-.633-1.382-.314 0 0-9.61 6.635-10.422 7.125L5.569.182C5.106-.137 4.486.004 4.187.496c-.3.492-.168 1.15.295 1.469L13.254 8H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4Zm-1 15h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2Zm-9 2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V15a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10Zm0-13H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Zm9 14h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2Zm-3-12h2v2h-2v-2Zm1-2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                  />
                </svg>
                <div>시리즈</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href={"/movies/28"}>
          <div className={style.navPill}>
            {segment === "movies" ? (
              <>
                <svg
                  xmlSpace="preserve"
                  width={26}
                  viewBox="0 0 512 512"
                  fill={"red"}
                >
                  <path d="M0 74.451v363.098h512V74.451H0zm71.524 92.79H47.957a7.633 7.633 0 0 1-7.633-7.632v-42.974a7.632 7.632 0 0 1 7.633-7.631h23.566a7.63 7.63 0 0 1 7.631 7.631v42.974a7.631 7.631 0 0 1-7.63 7.632zm-23.567 54.603h23.566a7.631 7.631 0 0 1 7.631 7.633v42.974a7.631 7.631 0 0 1-7.631 7.632H47.957a7.633 7.633 0 0 1-7.633-7.632v-42.974a7.633 7.633 0 0 1 7.633-7.633zm0 122.914h23.566a7.632 7.632 0 0 1 7.631 7.632v42.975a7.631 7.631 0 0 1-7.631 7.632H47.957a7.633 7.633 0 0 1-7.633-7.632V352.39a7.634 7.634 0 0 1 7.633-7.632zm151.025-17.902V185.144c0-5.875 6.359-9.547 11.447-6.609l122.725 70.856c5.088 2.937 5.088 10.281 0 13.218L210.43 333.465c-5.088 2.937-11.448-.735-11.448-6.609zm265.059-159.615h-23.565a7.633 7.633 0 0 1-7.633-7.632v-42.974a7.632 7.632 0 0 1 7.633-7.631h23.565a7.63 7.63 0 0 1 7.631 7.631v42.974a7.631 7.631 0 0 1-7.631 7.632zm-23.565 54.603h23.565a7.631 7.631 0 0 1 7.631 7.633v42.974a7.631 7.631 0 0 1-7.631 7.632h-23.565a7.633 7.633 0 0 1-7.633-7.632v-42.974a7.634 7.634 0 0 1 7.633-7.633zm0 122.914h23.565a7.632 7.632 0 0 1 7.631 7.632v42.975a7.631 7.631 0 0 1-7.631 7.632h-23.565a7.633 7.633 0 0 1-7.633-7.632V352.39a7.635 7.635 0 0 1 7.633-7.632z" />
                </svg>
                <div className={"font-bold text-red-600"}>영화</div>
              </>
            ) : (
              <>
                <svg
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  viewBox="0 0 512 512"
                  fill={"white"}
                >
                  <path
                    d="M213.094 312.891c.672.391 1.5.375 2.172-.016l92.156-55.016a2.151 2.151 0 0 0 1.047-1.859c0-.75-.391-1.469-1.047-1.859l-92.156-55a2.197 2.197 0 0 0-2.172-.031A2.157 2.157 0 0 0 212 201v110.016c0 .781.406 1.5 1.094 1.875z"
                    className="st0"
                  />
                  <path
                    d="M0 16v480h512V16H0zm420 40h56v32h-56V56zm-96 0h56v32h-56V56zm-96 0h56v32h-56V56zm-96 0h56v32h-56V56zm-96 0h56v32H36V56zm56 400H36v-32h56v32zm96 0h-56v-32h56v32zm96 0h-56v-32h56v32zm96 0h-56v-32h56v32zm96 0h-56v-32h56v32zm.688-64h-440V120h440v272z"
                    className="st0"
                  />
                </svg>
                <div>영화</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href={"/latest"}>
          <div className={style.navPill}>
            {segment === "latest" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  xmlSpace="preserve"
                  viewBox="0 0 512 512"
                  fill={"red"}
                >
                  <path d="m512 255.996-63.305-51.631 29.002-76.362-80.633-13.07L383.993 34.3l-76.361 29.002L256 .004l-51.646 63.298L128.008 34.3l-13.07 80.634-80.633 13.07 28.988 76.362L0 255.996l63.292 51.632-28.988 76.368 80.633 13.07 13.07 80.633 76.347-29.002L256 511.996l51.632-63.299 76.361 29.002 13.07-80.633 80.633-13.07-29.002-76.368L512 255.996zm-299.171 57.652-14.382 2.834c-.973.183-1.649-.056-2.298-.811l-39.266-45.872-.606.12 10.151 51.596c.142.726-.253 1.304-.972 1.452l-13.662 2.686c-.719.141-1.297-.254-1.438-.98l-15.678-79.746c-.155-.734.24-1.304.959-1.445l14.508-2.855c.846-.169 1.635.056 2.284.811l39.181 46.013.592-.12-10.166-51.716c-.14-.733.254-1.304.973-1.452l13.662-2.686c.719-.141 1.297.24 1.438.973l15.678 79.745c.155.734-.239 1.312-.958 1.453zm70.834-13.93-52.689 10.364c-.733.14-1.296-.247-1.452-.973l-15.678-79.745c-.141-.734.24-1.312.973-1.452l52.688-10.364c.719-.14 1.298.247 1.438.98l2.538 12.922c.155.726-.24 1.305-.959 1.445l-35.418 6.966c-.479.092-.676.38-.578.867l3.201 16.312c.099.48.395.677.874.586l29.495-5.802c.719-.141 1.297.253 1.438.972l2.524 12.81c.141.726-.254 1.297-.972 1.438l-29.496 5.802c-.479.099-.676.388-.577.867l3.355 17.039c.084.486.38.676.86.578l35.417-6.965c.719-.141 1.298.254 1.438.98l2.538 12.93c.156.724-.239 1.302-.958 1.443zm88.233-18.611c.014.754-.493 1.361-1.339 1.523l-12.083 2.376c-.846.169-1.424-.226-1.805-.902L332.362 235.8l-.24.049-4.328 53.937c-.099.768-.494 1.354-1.34 1.515l-12.083 2.383c-.719.141-1.297-.254-1.692-.931l-36.94-75.565c-.268-.705-.127-1.234.719-1.403l15.594-3.059c.846-.17 1.423.212 1.678.923l21.995 49.263.24-.049 3.877-54.346c.099-.782.493-1.353 1.326-1.523l10.518-2.066c.719-.141 1.297.24 1.692.931l24.631 48.734.254-.05 1.212-53.816c-.042-.874.367-1.34 1.213-1.502l15.467-3.038c.846-.17 1.17.261 1.198 1.015l-5.457 83.905z" />
                </svg>
                <div className={"font-bold text-red-600"}>
                  NEW! 요즘 대세 콘텐츠
                </div>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  xmlSpace="preserve"
                  viewBox="0 0 512 512"
                  fill={"white"}
                >
                  <path
                    d="m13.175 203.061-.007-.026-.672-1.763.679 1.789zm4.064-39.646 11.178-7.3c.006 0 .012-.007.019-.014l-11.197 7.314z"
                    className="st0"
                  />
                  <path
                    d="M480.364 260.466a12.507 12.507 0 0 1-.823-4.466c0-1.521.274-3.042.826-4.492l16.869-44.275 1.586-4.172a39.345 39.345 0 0 0 2.582-14.006 39.358 39.358 0 0 0-17.835-32.953l-5.599-3.656-37.84-24.708a12.625 12.625 0 0 1-5.25-7.247l-13.548-50.047c-4.675-17.23-20.28-29.075-37.978-29.075-.669 0-1.335.013-2.004.052L329.766 44v-.006l-.774.02c-2.896 0-5.687-.98-7.933-2.788l-37.766-30.42-2.598-2.089A39.272 39.272 0 0 0 256.002 0a39.259 39.259 0 0 0-24.697 8.717l.01-.007-36.205 29.16-4.159 3.35a12.66 12.66 0 0 1-7.94 2.795l-.673-.015-51.555-2.572-.033-.007c-.8-.046-1.502-.052-2.102-.052-17.701 0-33.303 11.844-37.978 29.075l-13.549 50.047a12.655 12.655 0 0 1-5.278 7.273l-3.732 2.436-39.694 25.915a39.365 39.365 0 0 0-17.822 32.946c0 4.675.839 9.415 2.573 13.973l18.465 48.473.003.006a12.62 12.62 0 0 1 .826 4.486c0 1.522-.274 3.043-.826 4.48l-18.461 48.46.003-.006a39.313 39.313 0 0 0-2.583 13.999 39.366 39.366 0 0 0 17.838 32.966l32.218 21.038 11.201 7.313a12.577 12.577 0 0 1 5.269 7.26L90.67 441.55c4.671 17.23 20.28 29.075 37.978 29.081.6-.006 1.254-.013 1.952-.052l-1.482.078 53.439-2.67h-.026l.5-.007c2.866 0 5.658.98 7.91 2.795l40.371 32.522h.003a39.312 39.312 0 0 0 24.687 8.704 39.303 39.303 0 0 0 24.691-8.71l43.841-35.318-3.467 2.795a12.585 12.585 0 0 1 7.907-2.788l.6.013 52.189 2.605-.262-.012c.568.026 1.186.039 1.855.045 17.691-.006 33.306-11.844 37.978-29.081l13.548-50.041a12.577 12.577 0 0 1 5.262-7.254l43.45-28.37a39.372 39.372 0 0 0 17.812-32.947c0-4.682-.842-9.442-2.586-14.012l-18.456-48.46zm-24.984-18.478a39.346 39.346 0 0 0 0 28.031l18.449 48.44.003.007a12.49 12.49 0 0 1 .829 4.473c-.007 4.166-2.063 8.188-5.716 10.571l-43.41 28.344h.003a39.34 39.34 0 0 0-16.474 22.67l-13.548 50.04a12.599 12.599 0 0 1-12.16 9.317l-.751-.02-.189-.006-51.474-2.566h.036a39.438 39.438 0 0 0-2.004-.059 39.36 39.36 0 0 0-24.694 8.717l-3.47 2.801-36.897 29.721a12.486 12.486 0 0 1-7.91 2.788c-2.82 0-5.586-.914-7.913-2.788l-40.368-32.522a39.37 39.37 0 0 0-24.69-8.71c-.601 0-1.303.007-2.106.052v.007l-51.64 2.579.016-.006-.652.013c-5.642.006-10.676-3.794-12.161-9.317l-13.548-50.04a39.339 39.339 0 0 0-16.474-22.67l-32.212-21.031-11.194-7.313c-3.65-2.377-5.713-6.405-5.72-10.578.003-1.496.265-2.997.826-4.466l18.461-48.454-.003.007a39.38 39.38 0 0 0 2.582-14.019c0-4.753-.858-9.506-2.582-14.018L38.848 195.33l-.679-1.776a12.684 12.684 0 0 1-.83-4.492c.007-4.172 2.067-8.188 5.716-10.564l43.414-28.343.007-.007a39.401 39.401 0 0 0 16.464-22.67l13.548-50.047c1.482-5.517 6.523-9.324 12.161-9.317l.503.006 51.91 2.592.056.007c.63.026 1.264.04 1.894.046a39.416 39.416 0 0 0 24.701-8.704l40.386-32.529c2.321-1.874 5.08-2.782 7.904-2.788 2.821 0 5.583.914 7.907 2.788l-2.602-2.096 42.979 34.618a39.401 39.401 0 0 0 24.707 8.704c.666 0 1.263-.02 1.792-.033h-.14l52.075-2.599h.035l.601-.013c5.641-.007 10.678 3.8 12.16 9.317l13.548 50.047a39.399 39.399 0 0 0 16.464 22.67l49.018 32.006-5.602-3.656c3.653 2.377 5.71 6.392 5.716 10.558a12.55 12.55 0 0 1-.832 4.492l-20.832 54.683 2.383-6.242z"
                    className="st0"
                  />
                  <path
                    d="m196.151 226.298-13.784 2.709c-.725.15-1.123.725-.979 1.463l10.254 52.175-.597.124-39.528-46.423c-.653-.757-1.45-.986-2.305-.816l-14.636 2.88c-.725.144-1.123.718-.966 1.455l15.817 80.448c.14.738.725 1.136 1.45.992l13.783-2.71c.725-.15 1.123-.731.983-1.469l-10.242-52.051.61-.118 39.613 46.28c.653.757 1.338.999 2.318.816l14.509-2.86c.724-.144 1.122-.725.966-1.463l-15.814-80.454c-.143-.736-.727-1.121-1.452-.978zm84.717 53.351-35.731 7.026c-.483.105-.78-.091-.865-.581l-3.385-17.192c-.102-.483.098-.77.581-.874l29.757-5.85c.725-.144 1.123-.719.983-1.449l-2.546-12.922c-.144-.724-.728-1.123-1.453-.986l-29.754 5.857c-.484.091-.784-.111-.881-.594l-3.232-16.454c-.098-.49.101-.784.584-.875l35.731-7.026c.725-.144 1.123-.725.966-1.456l-2.56-13.038c-.144-.738-.725-1.13-1.453-.986l-53.152 10.454c-.741.144-1.126.725-.982 1.462l15.817 80.454c.156.732.724 1.123 1.465.98l53.152-10.454c.728-.144 1.126-.725.97-1.456l-2.563-13.046c-.139-.733-.724-1.137-1.449-.994zm96.353-88.955-15.605 3.068c-.852.164-1.266.634-1.224 1.515l-1.221 54.291-.258.046-24.847-49.16c-.398-.699-.983-1.084-1.708-.94l-10.61 2.083c-.839.17-1.237.744-1.338 1.541l-3.911 54.82-.242.052-22.19-49.701c-.255-.718-.839-1.096-1.691-.927l-15.732 3.082c-.852.17-.996.706-.725 1.417l37.266 76.23c.398.685.98 1.084 1.708.94l12.19-2.403c.852-.163 1.25-.751 1.348-1.528l4.368-54.415.242-.045 24.521 48.728c.385.685.97 1.084 1.822.914l12.19-2.403c.852-.157 1.365-.77 1.352-1.535l5.504-84.645c-.03-.764-.357-1.195-1.209-1.025z"
                    className="st0"
                  />
                </svg>
                <div>NEW! 요즘 대세 콘텐츠</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href={"/my-list"}>
          <div className={style.navPill}>
            {segment === "my-list" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  viewBox="0 -1 32 32"
                  fill={"red"}
                >
                  <path
                    fillRule="evenodd"
                    d="M24 0c-3.333 0-6.018 1.842-8.031 4.235C14.013 1.76 11.333 0 8 0 3.306 0 0 4.036 0 8.438c0 2.361.967 4.061 2.026 5.659l12.433 14.906c1.395 1.309 1.659 1.309 3.054 0l12.461-14.906C31.22 12.499 32 10.799 32 8.438 32 4.036 28.694 0 24 0"
                  />
                </svg>
                <div className={"font-bold text-red-600"}>내가 찜한 콘텐츠</div>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  viewBox="0 -.5 32 32"
                  fill={"white"}
                >
                  <path
                    fillRule="evenodd"
                    d="M28 13.682 16 28 4 13.623c-1.435-1.994-2-3.341-2-5.185 0-3.439 2.455-6.534 6-6.563 2.916-.024 6.222 2.954 8 5.199 1.731-2.166 5.084-5.199 8-5.199 3.451 0 6 3.124 6 6.563 0 1.844-.447 3.291-2 5.244ZM24 0c-3.333 0-5.855 1.956-8 4-2.043-2.169-4.667-4-8-4-4.694 0-8 4.036-8 8.438 0 2.361.967 4.061 2.026 5.659l12.433 14.906c1.395 1.477 1.659 1.477 3.054 0l12.461-14.906C31.22 12.499 32 10.799 32 8.438 32 4.036 28.694 0 24 0Z"
                  />
                </svg>
                <div>내가 찜한 콘텐츠</div>
              </>
            )}
          </div>
        </Link>
      </li>
    </>
  );
}
