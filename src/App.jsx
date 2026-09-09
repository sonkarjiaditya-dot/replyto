import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GfBf from './pages/GfBf';
import CrushFlirting from './pages/CrushFlirting';
import CrazyFlirting from './pages/CrazyFlirting';
import StartConversation from './pages/StartConversation';
import FriendToGf from './pages/FriendToGf';
import Friends from './pages/Friends';
import Boss from './pages/Boss';
import Interviewer from './pages/Interviewer';
import Client from './pages/Client';
import Coworker from './pages/Coworker';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import AdminReplies from './pages/admin/Replies';
import AddReply from './pages/admin/AddReply';
import Categories from './pages/admin/Categories';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
  <Route path="/search" element={<Search />} />
      <Route path="/gf-bf" element={<GfBf />} />
      <Route path="/crush-flirting" element={<CrushFlirting />} />
      <Route path="/crazy-flirting" element={<CrazyFlirting />} />
      <Route path="/start-conversation" element={<StartConversation />} />
      <Route path="/friend-to-gf" element={<FriendToGf />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/boss" element={<Boss />} />
      <Route path="/interviewer" element={<Interviewer />} />
      <Route path="/client" element={<Client />} />
      <Route path="/coworker" element={<Coworker />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="replies" element={<AdminReplies />} />
        <Route path="replies/new" element={<AddReply />} />
        <Route path="replies/:id/edit" element={<AddReply />} />
        <Route path="categories" element={<Categories />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
