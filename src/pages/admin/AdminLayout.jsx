import { Link, NavLink, Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="admin-shell">
      <div className="admin-topbar">
        <div className="brand">
          Reply<span className="to">To</span> Admin
        </div>
        <Link className="back-link" to="/">
          ‹ Back to site
        </Link>
      </div>
      <div className="admin-tabs">
        <NavLink to="/admin" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Dashboard
        </NavLink>
        <NavLink to="/admin/replies" className={({ isActive }) => (isActive ? 'active' : '')}>
          Replies
        </NavLink>
        <NavLink to="/admin/categories" className={({ isActive }) => (isActive ? 'active' : '')}>
          Categories
        </NavLink>
        <NavLink to="/admin/replies/new" className={({ isActive }) => (isActive ? 'active' : '')}>
          Add Reply
        </NavLink>
      </div>
      <div className="admin-body">
        <Outlet />
      </div>
    </div>
  );
}
