import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

interface sidebarType {
  sidebarOpened: boolean
  changeValue: () => void
}

const useSidebarHook = (): sidebarType => {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const changeValue = (): void => {
    setSidebarOpened(!sidebarOpened)
  }
  return { sidebarOpened, changeValue }
}

const Navbar = (): JSX.Element => {
  const { sidebarOpened, changeValue } = useSidebarHook()
  console.log('inside navbar', sidebarOpened)
  return (
    <div className="flex flex-row items-center w-full z-10 border-b bg-slate-100 fixed top-0 left-0 h-14 px-4 text-xl">
      <FontAwesomeIcon
        icon={sidebarOpened ? faXmark : faBars}
        onClick={() => {
          changeValue()
        }}
      />
      <div>Header</div>
    </div>
  )
}

const Sidebar = (): JSX.Element => {
  const { sidebarOpened } = useSidebarHook()
  console.log('inside sidebar', sidebarOpened)
  return (
    <div
      className={`flex flex-col border-r border-[#ebebeb] bg-white shrink-0 overflow-y-auto fixed h-screen z-10 top-14 left-[-225px] w-[225px] transition-transform duration-300 ease-in-out ${
        sidebarOpened ? 'translate-x-[225px] ' : ''
      }`}
    >
      <div className="p-4">Home</div>
      <div className="p-4">about us</div>
      <div className="p-4">gallery</div>
      <div className="p-4">contact us</div>
    </div>
  )
}

const MainContent = (): JSX.Element => {
  return (
    <div className="flex flex-col grow top-14 relative w-9/12 mx-auto text-3xl my-8">
      Norway, officially the Kingdom of Norway,[a] is a Nordic country in
      Northern Europe, the mainland territory of which comprises the western and
      northernmost portion of the Scandinavian Peninsula. The remote Arctic
      island of Jan Mayen and the archipelago of Svalbard also form part of
      Norway.[note 5] Bouvet Island, located in the Subantarctic, is a
      dependency of Norway; it also lays claims to the Antarctic territories of
      Peter I Island and Queen Maud Land. The capital and largest city in Norway
      is Oslo. Norway has a total area of 385,207 square kilometres (148,729 sq
      mi)[12] and had a population of 5,488,984 in January 2023.[14] The country
      shares a long eastern border with Sweden at a length of 1,619 km (1,006
      mi). It is bordered by Finland and Russia to the northeast and the
      Skagerrak strait to the south, on the other side of which are Denmark and
      the United Kingdom. Norway has an extensive coastline, facing the North
      Atlantic Ocean and the Barents Sea. The maritime influence dominates
      Norway climate, with mild lowland temperatures on the sea coasts; the
      interior, while colder, is also significantly milder than areas elsewhere
      in the world on such northerly latitudes. Even during polar night in the
      north, temperatures above freezing are commonplace on the coastline. The
      maritime influence brings high rainfall and snowfall to some areas of the
      country. Harald V of the House of Glücksburg is the current King of
      Norway. Jonas Gahr Støre has been prime minister since 2021, replacing
      Erna Solberg. As a unitary sovereign state with a constitutional monarchy,
      Norway divides state power between the parliament, the cabinet and the
      supreme court, as determined by the 1814 constitution. The kingdom was
      established in 872 as a merger of many petty kingdoms and has existed
      continuously for 1,151 years. From 1537 to 1814, Norway was a part of the
      Kingdom of Denmark–Norway, and, from 1814 to 1905, it was in a personal
      union with the Kingdom of Sweden. Norway was neutral during the First
      World War, and also in World War II until April 1940 when the country was
      invaded and occupied by Nazi Germany until the end of the war. Norway has
      both administrative and political subdivisions on two levels: counties and
      municipalities. The Sámi people have a certain amount of
      self-determination and influence over traditional territories through the
      Sámi Parliament and the Finnmark Act. Norway maintains close ties with
      both the European Union and the United States. Norway is also a founding
      member of the United Nations, NATO, the European Free Trade Association,
      the Council of Europe, the Antarctic Treaty, and the Nordic Council; a
      member of the European Economic Area, the WTO, and the OECD; and a part of
      the Schengen Area. In addition, the Norwegian languages share mutual
      intelligibility with Danish and Swedish.
    </div>
  )
}
const Overlay = (): JSX.Element => {
  const { sidebarOpened } = useSidebarHook()
  console.log('inside overlay', sidebarOpened)
  return (
    <div
      className={`w-screen h-screen fixed z-0 top-0 overflow-hidden bg-[#00000080] block ${
        sidebarOpened ? 'block' : 'hidden'
      }`}
    >
      Overlay
    </div>
  )
}

const Layout = (): JSX.Element => {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <MainContent></MainContent>
      <Overlay></Overlay>
    </>
  )
}

export default Layout
